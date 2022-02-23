import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import axios from "axios";
import searchIcon from "../../images/searchicon.png";

const SearchBar = (props) => {
  const [recipeWord, setRecipeWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleSubmit = () => {
    if (searchWord !== "") {
      setRecipeWord(searchWord);
      setToggleSearch(!toggleSearch);
    } else return;
  };

  const appId = "e07457e3";
  const appKey = "126c04352c3086f78d428c7ce21556d0";

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeWord}&app_id=${appId}&app_key=${appKey}`
      )
      .then((res) => {
        props.setSearchData({
          url: res.data.hits[0].recipe.images.REGULAR.url,
          //title: res.data.hits[0].recipe.label,
          ingredients: res.data.hits[0].recipe.ingredients.map((e) => e.food),
          protein: res.data.hits[0].recipe.totalNutrients.PROCNT.quantity,
          fats: res.data.hits[0].recipe.totalNutrients.FAT.quantity,
          carbs: res.data.hits[0].recipe.totalNutrients.CHOCDF.quantity,
          calories: res.data.hits[0].recipe.totalNutrients.ENERC_KCAL.quantity,
        });
        console.log(res.data.hits[0].recipe.images.REGULAR.url);
        console.log(res.data.hits[0].recipe.label);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [toggleSearch]);

  return (
    <div className="searchForm">
      <input
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        placeholder="Search for Recipes"
      />
      <button type="submit" onClick={handleSubmit}>
        <img src={searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;