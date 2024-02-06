import React from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import "../Styles/Main.css"

const Main = () => {
  return (
    <>
    <div className="Main">
      <Card />
      <PokemonInfo />
    </div>
    </>
  );
};

export default Main;
