import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  console.log("Planned Meals: " + plannedRecipes);
  return (
    <div className="PlannedMeals">
      {plannedRecipes.map((e) => (
        <div>
          <RecipeCardMUI key={key(e)} url={e.url} title={e.title} />
        </div>
      ))}
    </div>
  );
};

export default PlannedMeals;
