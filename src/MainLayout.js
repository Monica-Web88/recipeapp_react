import React, { createContext, useState, useContext, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Context from "./context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./styles.css";

const MainLayout = () => {
  const [jsonData, setData] = useState(null);

  const generateJSON = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const respData = await response.json();
      console.log("value got : ", respData);
      setData(respData);
    } catch (err) {
      console.log(err.message);
    }
  };

  generateJSON();
  return (
    <div className="alignClass">
      <div className="mainDiv"><h1> Monica's Recipe App </h1> </div>
      {/*
        <button id="generateBtn" type="submit" onClick={generateJSON}>
          GET Recipes
        </button> 
      */}

      <div className="recipeDiv">
        <Context.Provider value={jsonData}>
          <Container>
            <Row style={{ justifyContent: "center" }}>
              <RecipeCard />
            </Row>
          </Container>
        </Context.Provider>
      </div>
    </div>
  );
};

export default MainLayout;
