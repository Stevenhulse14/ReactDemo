/* eslint-disable */

import { useState, useEffect } from "react";
//import { fetchPokemonData } from "../api/fetchData";

function Counter({ team, setTeam }) {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState("");
  const [myData, setMyData] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const addToList = () => {
    setTeam([pokemon, ...team]);
  };
  // there are 3 different ways to use a useEffect
  // the first way is `[]` empty array inside your useEffect that useEffect will fire once at render.

  useEffect(() => {
    // const data = async () => await fetchPokemonData();
    // console.log("This is my data", data());
    // setMyData(data);
    const fetchPokemonData = async () => {
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        const response = await data.json();
        const newlistPokemon = response.results.map(({ name }) => name);
        setTeam([...team, ...newlistPokemon]);
        //return response.results.map(({ name }) => name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonData();
  }, []);

  console.log("mydata", myData);
  return (
    <div className="m-auto w-6/12 border-red-400 border-4 text-center rounded-md mt-5 pb-2 bg-orange-200">
      <h1>Counter Component</h1>
      <h2>Pokemon Name {pokemon}</h2>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        onClick={addToList}
      >
        Add Pokemon
      </button>
      <form>
        <label htmlFor="pokemon">Pokemon Name: </label>
        <input
          onChange={(e) => setPokemon(e.target.value)}
          type="text"
          id="pokemon"
          name="pokemon"
          value={pokemon}
        ></input>
      </form>
      <div className="pokemons">
        {team.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    </div>
  );
}

export default Counter;
