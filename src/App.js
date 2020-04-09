import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      ' 1. Put Salt on Chicken\n 2. Put Chicken in oven\n 3. Eat and Enjoy!!!',
    ingredients: [
      { id: 1, name: 'Chicken', amount: '2 pounds' },
      { id: 2, name: 'Salt', amount: '1 Tbs' },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions:
      ' 1. Put paprika on Pork\n 2. Put Pork in oven\n 3. Eat and Enjoy!!!',
    ingredients: [
      { id: 1, name: 'Pork', amount: '3 lbs' },
      { id: 2, name: 'Paprika', amount: '2 Tbs' },
    ],
  },
];
export default App;
