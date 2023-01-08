import React, { useState } from "react";
import pic from '../images/Battle.png';
import Pokeball from '../images/Pokeball.png';
import './BattleStyles.css';
import { Card, Button } from 'antd';
import PokeballOpen from '../images/PokeballOpen.png';
import Pokemons from '../../allPokemons.json';
import { TypeAndWeakness, TypeSpaceContainer } from "../pokedexDetailCard/pokedexDetailsStyle.js";
import styleType from '../../pokeTypeDesign.json';

export const Battle = () => {
    const [ abilities, setAbilities ] = useState(false);
    const [ weakness, setWeakness ] = useState(false);
    const [ click, setClick ] = useState(true);
    const [ winner, setWinner ] = useState({})

    let Poke1 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    let Poke2 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    if(Poke1 === Poke2) {
        Poke2 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    }
    let arr = [Poke1, Poke2];
    let i = 1;

    const handleOnClick = () => {
        setWinner(Poke1);
        setClick(false);
    }

    return (
        <div className="BattleContainer">
            <div className="BattleHeader" style={{ backgroundImage: `url(${pic})` }}>
                {click && 
                    <>
                    <div className="set">
                    <div><img src={Pokeball} ></img></div>
                    <div><img src={Pokeball} ></img></div>
                    <div><img src={PokeballOpen}></img></div>
                    <div><img src={PokeballOpen}></img></div>
                </div>
                <div className="CardContainer">
                    {arr.map((item, index) => {
                        return(
                            <Card className="Cards" cover={<img src={item.ThumbnailImage} style={{ width: "200px", height: "200px", position: "relative", top: "40px "}}></img>}>
                                <div className="PokeDetails">
                                    <div style={{ fontSize: "28px", fontWeight: "800" }}>{item.name}</div>
                                    <div>
                                        {item.type.map((element) => {
                                            let typeKey = styleType.find(obj => obj.type === element);
                                            let style = typeKey.style;
                                            return (
                                                <TypeSpaceContainer>
                                            <TypeAndWeakness style={style}>
                                                {element}
                                            </TypeAndWeakness>
                                        </TypeSpaceContainer>
                                            )
                                        })}
                                    </div>
                                    <div className="AbilitiesAndWeakness">
                                        <Card className="AbilitiesAndWeaknessCards" hoverable onClick={() => setAbilities(!abilities)}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Abilities</div>
                                            {abilities && <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around"  }}>
                                                {item.abilities.map((element) => {
                                                return (
                                                        <TypeAndWeakness >
                                                            {element}
                                                        </TypeAndWeakness>
                                                        )
                                                    })}
                                        </div>}
                                        </Card>
                                        <Card className="AbilitiesAndWeaknessCards" hoverable onClick={() => setWeakness(!weakness)}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Weakness</div>
                                            {weakness && <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around"  }}>
                                                    {item.weakness.map((element) => {
                                                        // let typeKey = styleType.find(obj => obj.type === element);
                                                        // let style = typeKey.style;
                                                        return (
                                                        <TypeAndWeakness>
                                                            {element}
                                                        </TypeAndWeakness>
                                                    )
                                                        })}
                                            </div>}
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div>
                    {i === 1 && <Button className="BattleButton" onClick={handleOnClick}>Battle</Button>}
                </div>
                    </>
                }
                {!click && winner &&
                    <>
                        <div className="WinnerContainer">Winner!!</div>
                        <div className="CardContainer">
                        <Card className="WinnerCards" cover={<img src={winner.ThumbnailImage} style={{ width: "200px", height: "200px", position: "relative", top: "40px "}}></img>}>
                                <div className="PokeDetails">
                                    <div style={{ fontSize: "28px", fontWeight: "800" }}>{winner.name}</div>
                                    <div>
                                        {winner.type.map((element) => {
                                            let typeKey = styleType.find(obj => obj.type === element);
                                            let style = typeKey.style;
                                            return (
                                                <TypeSpaceContainer>
                                            <TypeAndWeakness style={style}>
                                                {element}
                                            </TypeAndWeakness>
                                        </TypeSpaceContainer>
                                            )
                                        })}
                                    </div>
                                    <div className="AbilitiesAndWeakness">
                                        <Card className="AbilitiesAndWeaknessCards" hoverable onClick={() => setAbilities(!abilities)}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Abilities</div>
                                            {abilities && <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around"  }}>
                                                {winner.abilities.map((element) => {
                                                return (
                                                        <TypeAndWeakness >
                                                            {element}
                                                        </TypeAndWeakness>
                                                        )
                                                    })}
                                        </div>}
                                        </Card>
                                        <Card className="AbilitiesAndWeaknessCards" hoverable onClick={() => setWeakness(!weakness)}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Weakness</div>
                                            {weakness && <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around"  }}>
                                                    {winner.weakness.map((element) => {
                                                        // let typeKey = styleType.find(obj => obj.type === element);
                                                        // let style = typeKey.style;
                                                        return (
                                                        <TypeAndWeakness>
                                                            {element}
                                                        </TypeAndWeakness>
                                                    )
                                                        })}
                                            </div>}
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}