import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../services/apiCalls";
import LoadingSpinner from "./shared/widgets/LoadingSpinner";

const IndividualPokemon = ({ location }) => {
  const [pokemon, setPokemon] = useState({});
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    if (!location.state) {
      const _pokemon = location.pathname.split("/").slice(-1).toString();
      const _url = "https://pokeapi.co/api/v2/pokemon/" + _pokemon;
      fetchPokemon(_url).then((_data) => {
        setloaded(true);
        setPokemon(_data);
      });
      return;
    }
    setloaded(true);
    setPokemon(location.state);
  }, [location]);
  return !!Object.keys(pokemon).length && loaded ? (
    <section className="component-container individual-pokemon">
      <div className="pokemon-image">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="individual-pokemon-body">
        <p className="pokemon-name">{pokemon.name}</p>
        <div>
          <p className="pokemon-bar"></p>
          <span>
            <b className="text-muted">XP: </b>
            {pokemon.base_experience}
          </span>
        </div>

        <div className="pokemon-images">
          {Object.keys(pokemon.sprites).map((_image) => (
            <img key={_image} src={pokemon.sprites[_image]} alt="" />
          ))}
        </div>
        <div className="pokemon-stats">
          <p>
            <span>{pokemon.height}</span>
            <span className="text-muted">Height </span>
          </p>
          <p>
            <span>{pokemon.weight}</span>
            <span>Weight</span>
          </p>
          {pokemon.stats.map((_stat) => (
            <p key={_stat.stat.name}>
              <span>{_stat.base_stat}</span>
              <span>{_stat.stat.name}</span>
            </p>
          ))}
        </div>
        <p className="pokemon-moves-header">Moves</p>
        <div className="pokemon-moves">
          {pokemon.moves.map((_move) => (
            <span className="pokemon-move" key={_move.move.name}>
              {_move.move.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <LoadingSpinner />
  );
};
export default IndividualPokemon;
