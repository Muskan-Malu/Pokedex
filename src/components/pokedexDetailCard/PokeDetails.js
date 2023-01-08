import React, { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform } from "framer-motion";
import { useParams } from "react-router-dom";
import Pokemons from '../../allPokemons.json';
import { App, AppHeader, BottomContainer, CardContainer, CardWrapper, Pokedex, PokedexWrapper, TopContainer, DetailsContainer, MediumText, SmallText, SpaceHorizontalContainer, TypeAndWeakness, TypeSpaceContainer, DetailsText, AbilitiesWrapper, WeaknessWrapper, AbilitiesHeaderWrapper, AbilitiesAndWeaknessWrapper, WeaknessHeaderWrapper, AbilitiesAndWeaknessCard, AbilitiesHeader, AbilitiesAndWeaknessHeader, AbilitiesAndWeakness, TopAWContainer, BottomAWContainer } from "./pokedexDetailsStyle";
import VanillaTilt from "vanilla-tilt";
import styleType from '../../pokeTypeDesign.json';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

export const PokeDetails = () => {
    const [ poke, setPoke ] = useState({});
    const [ abilities, setAbilities ] = useState(false);
    const [ weakness, setWeakness ] = useState(false);
    const param = useParams();

    useEffect(() => {
        let name = param.name;
        let pokeData = Pokemons.find(obj => obj.name === name);
        setPoke(pokeData);
    }, []);

    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useTransform(y, [-200, 200], [20, -20]);
    const rotateY = useTransform(x, [-200, 200], [-20, 20]);

    const options = {
        glare: true,
        "max-glare": 0.5
    }

    return (
        <App>
            <AppHeader>
                <CardWrapper>
                    <Tilt options={options}>
                        <CardContainer style={{ x, y, rotateX, rotateY, z: 100 }} drag dragElastic={0.16} dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }} whileTap={{ cursor: "grabbing" }} >
                            <TopContainer>
                                <PokedexWrapper>
                                    <Pokedex style={{ x, y, rotateX, rotateY, z: 100 }} drag dragElastic={0.12} whileTap={{ cursor: "grabbing" }} >
                                        {poke.name && <img src={require(`../images/${poke.name}.gif`)} />}
                                    </Pokedex>
                                </PokedexWrapper>
                            </TopContainer>
                            <BottomContainer>
                                <DetailsContainer>
                                    <SmallText>{poke.number}</SmallText>
                                    <SpaceHorizontalContainer>
                                        <MediumText>{poke.name}</MediumText>
                                        {poke.type && poke.type.map(element => {
                                                let typeKey = styleType.find(obj => obj.type === element);
                                                let style = typeKey.style;
                                            return <TypeSpaceContainer>
                                                <TypeAndWeakness style={style}>{element}</TypeAndWeakness>
                                            </TypeSpaceContainer>
                                        })}
                                    </SpaceHorizontalContainer>
                                    <AbilitiesAndWeaknessWrapper>
                                        <AbilitiesAndWeaknessCard onClick={() => setAbilities(!abilities)}>
                                            <TopAWContainer>
                                            <AbilitiesAndWeaknessHeader>Abilities</AbilitiesAndWeaknessHeader>
                                            </TopAWContainer>
                                            {abilities && <BottomAWContainer>
                                            {poke.abilities && poke.abilities.map(element => {
                                                return <TypeSpaceContainer>
                                                    <TypeAndWeakness>{element}</TypeAndWeakness>
                                                </TypeSpaceContainer>
                                            })}
                                            </BottomAWContainer>}
                                        </AbilitiesAndWeaknessCard>
                                        <AbilitiesAndWeaknessCard onClick={() => setWeakness(!weakness)}>
                                            <TopAWContainer>
                                            <AbilitiesAndWeaknessHeader>Weakness</AbilitiesAndWeaknessHeader>
                                            </TopAWContainer>
                                            {weakness && <BottomAWContainer>
                                            {poke.weakness && poke.weakness.map(element => {
                                            let key = styleType.find(obj => obj.typee === element);
                                            let style = key.style;
                                            return <TypeSpaceContainer>
                                                <TypeAndWeakness style={style}>{element}</TypeAndWeakness>
                                            </TypeSpaceContainer>
                                        })}
                                            </BottomAWContainer>}
                                        </AbilitiesAndWeaknessCard>
                                    </AbilitiesAndWeaknessWrapper>
                                </DetailsContainer>
                            </BottomContainer>
                        </CardContainer>
                    </Tilt>
                </CardWrapper>
            </AppHeader>
        </App>
    )
}

{/* <AbilitiesAndWeaknessWrapper>
                                                <AbilitiesHeaderWrapper onMouseMove={e => setAbilities(true)} onClick={e => setAbilities(false)}>Abilities</AbilitiesHeaderWrapper>
                                                    <AbilitiesWrapper>
                                                    {abilities && poke.abilities && poke.abilities.map(element => {
                                                        return <TypeSpaceContainer>
                                                            <TypeAndWeakness>{element}</TypeAndWeakness>
                                                        </TypeSpaceContainer>
                                                    })}
                                                    </AbilitiesWrapper>
                                        <WeaknessHeaderWrapper onMouseMove={e => setWeakness(true)} onClick={e => setWeakness(false)}>Weakness</WeaknessHeaderWrapper>
                                                {weakness && poke.weakness && poke.weakness.map(element => {
                                                    let key = styleType.find(obj => obj.typee === element);
                                                    let style = key.style;
                                                    return <TypeSpaceContainer>
                                                        <TypeAndWeakness style={style}>{element}</TypeAndWeakness>
                                                    </TypeSpaceContainer>
                                                })}
                                        </AbilitiesAndWeaknessWrapper> */}

// poke.ThumbnailImage

{/* <SmallText>Abilities</SmallText>
                                        {poke.abilities && poke.abilities.map(element => {
                                            return <TypeSpaceContainer>
                                                <TypeAndWeakness>{element}</TypeAndWeakness>
                                            </TypeSpaceContainer>
                                        })}
                                        <SmallText>Weakness</SmallText>
                                        {poke.weakness && poke.weakness.map(element => {
                                            let key = styleType.find(obj => obj.typee === element);
                                            let style = key.style;
                                            return <TypeSpaceContainer>
                                                <TypeAndWeakness style={style}>{element}</TypeAndWeakness>
                                            </TypeSpaceContainer>
                                        })} */}