import React from 'react';
import Recipe from './Recipe';

//This RecipeList component contains all of our individual recipes and a recipe add button

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
}

export default RecipeList;
