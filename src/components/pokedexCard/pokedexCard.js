import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { CardWrapper, CardContainer, CircleWrapper, Circle, TopContainer, BottomContainer, PokedexWrapper, Pokedex } from "./cardStyle";
import { PokedexDetails } from "./pokedexDetails";
import Pokemons from "../../allPokemons.json";
import VanillaTilt from "vanilla-tilt";
import { Link } from 'react-router-dom';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

export function PokedexCard(props) {
    const [style, setStyle] = useState({});
    const [drag, setDrag] = useState(false);

    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useTransform(y, [-200, 200], [20, -20]);
    const rotateY = useTransform(x, [-200, 200], [-20, 20]);

    return (
        <CardWrapper>
            {/* <img src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg"/> */}
            {Pokemons.map(pokemon => {
                return(
                    <CardContainer>
                        <Link to={`/pokeDetails/${pokemon.name}`} style={{ textDecoration: "none", color: "black" }} >
                            <TopContainer>
                            <PokedexWrapper>
                                <Pokedex>
                                    <img src={pokemon.ThumbnailImage} />    
                                </Pokedex>
                            </PokedexWrapper>
                            </TopContainer>
                            <BottomContainer>
                                <PokedexDetails key={pokemon.number} name={pokemon.name} number={pokemon.number} type={pokemon.type} />
                            </BottomContainer>
                        </Link>
                </CardContainer>
                )
            })}
        </CardWrapper>
    )
}