import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemon } from "../services/apiCalls";
import { showToast } from "./shared/widgets/Toast";

export const PokemonCard = ({ item }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemon(item.url)
      .then((_data) => {
        setPokemon(_data);
      })
      .catch((_err) =>
        showToast({
          message: "Sorry an error occured please. Try again.",
          _class: "error",
        })
      );
  }, []);

  return !!Object.keys(pokemon).length ? (
    <Link
      to={{ pathname: "/pokemon/" + pokemon.name, state: pokemon }}
      className="pokemon-card"
    >
      <img
        src={pokemon.sprites.front_default}
        alt=""
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && <div className="image-loader"></div>}
      <p className="pokemon-name">{pokemon.name}</p>
      <div className="">
        <p className="pokemon-bar"></p>
        <span>
          <b className="text-muted">XP: </b>
          {pokemon.base_experience}
        </span>
      </div>
    </Link>
  ) : (
    <div className="ghost-loader"></div>
  );
};

export const PokemonList = ({ list }) => {
  return (
    <section className="pokemon-list">
      <div className="pokemon-list-header">
        <span id="filter-icon"></span>
      </div>
      <div className="pokemon-list-body">
        {list.map((_item) => (
          <PokemonCard item={_item} key={_item.name} />
        ))}
      </div>
    </section>
  );
};

export const PokemonListHorizontal = ({ _list }) => {
  return (
    <section className="pokemon-list-horizontal-container">
      <div className="pokemon-list-horizontal" id="pokemon-list-container">
        <div className="pokemon-list-horizontal-body">
          {!!_list.length &&
            _list.map((_item) => <PokemonCard item={_item} key={_item.name} />)}
        </div>
      </div>
    </section>
  );
};
