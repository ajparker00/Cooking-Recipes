import React from 'react';

//This Recipe Component are components for the actual recipes itself

function Recipe(props) {
  const { name, cookTime, servings, instructions } = props;

  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions</span>
        <div>{instructions}</div>
      </div>
    </div>
  );
}

export default Recipe;
