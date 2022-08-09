import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"Photo de " + meal.strMeal} />
      {/* <div className="cook-instruction"> */}
      <p className="cook-instruction">{meal.strInstructions}</p>
      {/* </div> */}
    </div>
  );
};

export default Card;
