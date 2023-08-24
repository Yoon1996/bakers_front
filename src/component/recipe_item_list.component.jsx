import React, { useEffect, useState } from "react";
import "./recipe_item_list.component.scss";
import { showRecipe } from "../service/recipe.service";
import axios from "axios";

const RecipeItemListComponent = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    showRecipe()
      .then(function (res) {
        setRecipeList(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {recipeList.map((recipeList, index) => (
        <div className="recipeList__item" key={index}>
          {recipeList?.name}
        </div>
      ))}
    </>
  );
};

export default RecipeItemListComponent;
