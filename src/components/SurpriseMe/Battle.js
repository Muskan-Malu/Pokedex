import React, { useState, useEffect } from "react";
import pic from '../images/Battle.png';
import pic1 from '../images/Pokeball.png';
import Pokeball from '../images/Pokeball.png';
import './BattleStyles.css';
import { Card, Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import PokeballOpen from '../images/PokeballOpen.png';
import Pokemons from '../../allPokemons.json';
import { TypeAndWeakness, TypeSpaceContainer } from "../pokedexDetailCard/pokedexDetailsStyle.js";
import styleType from '../../pokeTypeDesign.json';
import { Link } from 'react-router-dom';
import { set } from "lodash";

export const Battle = () => {
    const [ abilities, setAbilities ] = useState(false);
    const [ weakness, setWeakness ] = useState(false);
    const [ click, setClick ] = useState(true);
    const [ winner, setWinner ] = useState({});
    const [ side, setSide ] = useState("");
    const [ winSide, setWinSide ] = useState("");

    let Poke1 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    let Poke2 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    let winPoke = Poke1.strength > Poke2.strength ? Poke1 : Poke2;
    let sideWinPoke = winPoke === Poke1 ? "left" : "right"; 
    if(Poke1 === Poke2) {
        Poke2 = Pokemons[Math.floor(Math.random() * Pokemons.length)];
    }
    let arr = [Poke1, Poke2];

    const handleOnClick = () => {
        setWinSide(sideWinPoke);
        setWinner(winPoke);
        setClick(false);
    }

    console.log(side, "Your Choice");
    console.log(sideWinPoke, "Winner Side");

    let text = winPoke === side ? "Yayy! You've won🎉" : "Oopsie! Let's try again";

    return (
        <div className="BattleContainer">
            <div className="BattleHeader" style={{ backgroundImage: `url(${pic})` }}>
                {!side && <div className="WinnerContainer">
                    <Card className="SideCard">
                        <div className="SideTxt">Please pick your side</div>
                        <div style={{ width: "400px", padding: "20px", justifyContent: "space-around", alignItems: "center" , display: "flex"}}>
                            <Button className="SideButton" onClick={() => setSide("left")}>
                            <ArrowLeftOutlined />Left</Button>
                            <Button className="SideButton" onClick={() => setSide("right")}>
                            Right<ArrowRightOutlined /></Button>
                        </div>
                    </Card>
                    </div>}
                {side && click && 
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
                    <Button className="BattleButton" onClick={handleOnClick}>Battle</Button>
                </div>
                    </>
                }
                {!click && winner &&
                    <>
                    <div style={{ "padding-top": "10px", position: "relative", left: "46%" }}>
                        <Link to={"/surpriseMe"} style={{ textDecoration: "none", color: "#edf0f5" }}>
                        <img src={pic1} />
                        <div style={{ fontSize: "20px" }}>Surprise Me!!</div>
                        </Link>
                    </div>
                        <div className="WinnerContainer">Winner!!</div>
                        <div className="CardContainer1">
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
                            <div className="WinnerContainer1">{text}</div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}