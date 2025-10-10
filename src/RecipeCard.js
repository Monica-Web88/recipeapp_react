/*
Recipe Card Displays the list of Cards with Recipe Name.
On clicking View Recipe, the Recipe Instructions are displyed in a
Custom popup component.

Author: Monica
Date : Jan 2025
FileName : RecipeCard.js
*/

import "./styles.css";
import "./recipe.css";
import { Fragment, useContext, useState, React } from "react";
import Context from "./context";
import PopUp from "./PopUp";

export default function RecipeCard() {
  const jsonData = useContext(Context);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const showRecipeDetails = (e) => {
    const recipe = e.target.value;
    const name = e.target.name;
    console.log("recipe", recipe);

    var recipeInst = "";

    if (recipe != undefined && recipe != "") {
      var recipeArray = recipe.split(",");
      recipeInst = (
        <Fragment>
          <h1>{name}</h1>
          <ol>
            {recipeArray.map((instructions) => (
              <li className="list">{instructions}</li>
            ))}
          </ol>
        </Fragment>
      );
    }
    console.log("recipe Instr after : ", recipeInst);
    setPopupContent(recipeInst);
    setShowPopUp(true);
  };

  if (jsonData) {
    if (!jsonData.recipes) return null;
    console.log("update div : ", jsonData.recipes);
    const recipes = jsonData.recipes;
    return (
      <div className="FoodList">
        <br />

        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
          recipes
            ? recipes.map((recipe) => {
                return (
                  <Fragment>
                    <div className="recipes" id={recipe.name}>
                      <h1>{recipe.name}</h1>
                      <img className="image" src={recipe.image} />
                      <button
                        name={recipe.name}
                        onClick={showRecipeDetails}
                        value={recipe.instructions}
                      >
                        View Recipe
                      </button>
                      {showPopUp && (
                        <PopUp
                          id={`popup-${recipe.name}`}
                          value={recipe.name}
                          showPopUp={showPopUp}
                          closePopUp={() => setShowPopUp(false)}
                        >
                          <div>{popupContent}</div>
                        </PopUp>
                      )}
                    </div>
                  </Fragment>
                );
              })
            : ""
        }
      </div>
    );
  } else {
    return null;
  }
}
