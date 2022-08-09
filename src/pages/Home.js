import React from "react";
import Card from "../components/Card";
import Cook from "../components/Cook";

const Home = () => {
  return (
    <div className="cooking-container">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Ex : beef" />
      <Cook />
      <Card />
    </div>
  );
};

export default Home;
