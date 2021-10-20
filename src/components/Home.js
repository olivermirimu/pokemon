import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonListHorizontal } from "./PokemonList";
import Slider from "./shared/widgets/Slider";
import SideScrollContainer from "./shared/widgets/SideScrollContainer";
import { fetchAllPokemon } from "../services/apiCalls";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const Home = () => {
  const [sample, setSample] = useState([]);
  const sliderContent = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
  ];

  useEffect(() => {
    // fetch and popuate favourites
    fetchAllPokemon().then((_data) => setSample(_data.results));
  }, []);
  return (
    <div className="">
      <Slider content={sliderContent} />
      <section className="some-pokemon component-container">
        <div className="section-header">
          <h2>Some Pokemon</h2>
          <Link to="/pokemon" className="see-all">
            See All
          </Link>
        </div>
        <SideScrollContainer
          list={sample}
          componentCard={PokemonListHorizontal}
        />
      </section>
    </div>
  );
};
export default Home;
