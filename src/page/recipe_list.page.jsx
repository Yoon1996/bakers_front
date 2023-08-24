import React from "react";
import "./recipe_list.page.scss";
import RecipeItemComponent from "../component/recipe_item.component";
import RecipeItemListComponent from "../component/recipe_item_list.component";

const RecipeListpage = () => {
  return (
    <>
      <RecipeItemComponent></RecipeItemComponent>
      <RecipeItemListComponent></RecipeItemListComponent>
    </>
  );
};

export default RecipeListpage;
