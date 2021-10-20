import React, { useState, useEffect } from "react";
import LoadingSpinner from "./shared/widgets/LoadingSpinner";
import { fetchAllPokemon } from "../services/apiCalls";
import { PokemonList } from "./PokemonList";
import { showToast } from "./shared/widgets/Toast";

const ViewAllPokemon = () => {
  const [list, setList] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);

  const changePageHandler = (event) => {
    const _action = event.target.dataset.target;
    if (_action === "previous" && list.previous) {
      updateList(list.previous);
    } else if (_action === "next" && list.next) {
      updateList(list.next);
    }
  };

  const updateList = (_url = "") => {
    setIsLoading(true);
    fetchAllPokemon(_url)
      .then((_data) => {
        setIsLoading(false);
        setList({
          previous: _data.previous,
          next: _data.next,
          results: _data.results,
          page: parseInt(new URL(_data.next).searchParams.get("offset")) / 20,
        });
      })
      .catch((_err) => {
        showToast({
          message: "Sorry an error occured. Please try again.",
          _class: "error",
        });
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    updateList();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section className="section-container" style={{ position: "relative" }}>
      <PokemonList list={list.results} />
      <div className="pagination-actions">
        <button
          className="btn previous-btn"
          onClick={changePageHandler}
          data-target="previous"
        >
          Previous
        </button>
        <span className="btn">| Page {list.page} |</span>
        <button
          className="btn next-btn"
          onClick={changePageHandler}
          data-target="next"
        >
          Next
        </button>
      </div>
    </section>
  );
};
export default ViewAllPokemon;
