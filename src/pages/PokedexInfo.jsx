import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokedexInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [aux, setAux] = useState(0);
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="pokeinfo">
      <section className="pokeinfo__title">
        <img
          className="pokeinfo__img pokeinfo__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
        />
      </section>
      <div className="pokeinfo__total">
        <div className="pokeinfo__twofirst">
        <div className="pokeinfo__section pokeinfo__description">
          <img
            className="pokeinfo__img pokeinfo__poke"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <div className="pokeinfo__relative">
          <h2 className="pokeinfo__name">{pokemon?.forms[0].name}</h2>
          <div className="pokeinfo__wandh">
            <div className="pokeinfo__grid">
              <label className="pokemon__label">Weight</label>
              <span className="pokemon__span">{pokemon?.weight}</span>
            </div>
            <div className="pokeinfo__grid">
              <label className="pokemon__label">Height</label>
              <span className="pokemon__span">{pokemon?.height}</span>
            </div>
          </div>
          </div>
        </div>
        <div className="pokeinfo__section pokeinfo__movements">
          <h2 className="pokeinfo__subtitle">Movements</h2>
          <ul className="pokeinfo__mov__container">
            <li classname="pokeinfo__mov__list" key={pokemon?.id}>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[0]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[1]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[2]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[3]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[4]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[5]?.move.name}
              </span>
              <span className="pokeinfo__mov__item">
                {pokemon?.moves[6]?.move.name}
              </span>
            </li>
          </ul>
        </div>
        </div>
        <div className="pokeinfo__flex">
          <div className="pokeinfo__section pokeinfo__type">
            <h2 className="pokeinfo__subtitle">Type</h2>
            <div className="pokeinfo__type__text">
              <span className="pokeinfo__span">
                {pokemon?.types[0]?.type.name}
              </span>
              {pokemon?.types[1]?.type.name ? (
                <span className="pokeinfo__span">{pokemon?.types[1].type.name}</span>
              ) : (
                console.log("no tiene")
              )}
            </div>
          </div>
          <div className="pokeinfo__section pokeinfo__abilities">
            <h2 className="pokeinfo__subtitle">Abilities</h2>
            <ul className="pokeinfo__ab__ul">
              <li className="pokeinfo__ab__li" key={pokemon?.id}>
                {pokemon?.abilities.map((ab) => (
                  <span className="pokeinfo__span pokeinfo__ab__item">
                    {ab.ability.name}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PokedexInfo;
