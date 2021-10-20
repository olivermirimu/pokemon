import { handleFetchError } from "../utilities/utilityFunctions";
const apiUrl = process.env.POKEMON_API;

export const fetchAllPokemon = (_url) => {
  return fetch(_url ? _url : apiUrl + "/pokemon").then((_response) => {
    return _response.json();
  });
};

export const fetchPokemon = (_url) => {
  return fetch(_url).then((_response) => _response.json());
};
