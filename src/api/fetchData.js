export const fetchPokemonData = async () => {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = await data.json();
    return response.results.map(({ name }) => name);
  } catch (error) {
    console.error(error);
  }
};
