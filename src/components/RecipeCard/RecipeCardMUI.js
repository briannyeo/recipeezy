import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function RecipeCardMUI(props) {
  //const { url, title } = props.searchData;
  //console.log(window.localStorage.getItem("a"));

  // const searchData = props.searchData;
  // const title = searchData.recipe.label;

  //SHOW INDIVIDUAL RECIPE
  // const navigate = useNavigate();
  // const handleShow = () => {
  //   props.handleShow({
  //     title: props.title,
  //     ingredients: props.ingredients,
  //     quantity: props.quantity,
  //     measure: props.measure,
  //     protein: props.protein,
  //     fats: props.fats,
  //     carbs: props.carbs,
  //     calories: props.calories,
  //     instructions: props.instructions,
  //   });
  //   navigate(`/recipe/${props.title}`);
  // };

  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

  //ADD RECIPE TO PLANNEDMEALS STATE
  const handleAdd = (item) => {
    setPlannedRecipes([...plannedRecipes, item]);
    console.log(plannedRecipes);
  };
  const handleRemove = (item) => {
    const filteredRecipes = [...plannedRecipes].filter((e) => e !== item);
    setPlannedRecipes(filteredRecipes);
    console.log(plannedRecipes);
  };

  const handleAddRecipe = () => {
    handleAdd({
      title: props.title,
      url: props.url,
      ingredients: props.ingredients,
      quantity: props.quantity,
      measure: props.measure,
      protein: props.protein,
      fats: props.fats,
      carbs: props.carbs,
      calories: props.calories,
      instructions: props.instructions,
    });
  };

  const handleRemoveRecipe = () => {
    handleRemove({
      title: props.title,
      url: props.url,
      ingredients: props.ingredients,
      quantity: props.quantity,
      measure: props.measure,
      protein: props.protein,
      fats: props.fats,
      carbs: props.carbs,
      calories: props.calories,
      instructions: props.instructions,
    });
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      {props.title ? (
        <>
          <CardMedia
            // onClick={handleShow}
            component="img"
            height="300"
            width="300"
            image={props.url}
            alt="food"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title || null}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions className="btndiv">
            <Button
              onClick={handleRemoveRecipe}
              className="removebtn"
              size="small"
            >
              Remove
            </Button>
            <Button onClick={handleAddRecipe} className="addbtn" size="small">
              Add
            </Button>
          </CardActions>
        </>
      ) : (
        <div></div>
      )}
    </Card>
  );
}
