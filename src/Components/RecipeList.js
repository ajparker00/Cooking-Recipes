import React from 'react';
import Recipe from './Recipe';

//This RecipeList component contains all of our individual recipes and a recipe add button

function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className='recipe-list_add-recipe-btn-container'>
        <button className='btn btn--primary'>Add Recipe</button>
      </div>
    </div>
  );
}

export default RecipeList;
