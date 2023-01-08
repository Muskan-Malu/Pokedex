import { motion } from "framer-motion";
import styled from "styled-components";

export const App = styled.div`
    text-align: center;
`;

export const AppHeader = styled.header`
    height: 750px;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    background-image: url("https://img.freepik.com/premium-vector/blue-sky-with-white-clouds-clear-sunny-day_136277-267.jpg?w=2000");
    /* color: white; */
`;

export const CardWrapper = styled.div`
    max-width: 1140px;
    padding: 20px;
    perspective: 2000;
    margin: auto;
    alignment: center;
    border: 0.5px #cccc
    box-shadow: 0 0 15px 5px grey;
    align-item: center;
    justify-content: center;
`;

export const CardContainer = styled(motion.div)`
    width: 400px;
    height: 550px;
    display: inline-grid;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.6);
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    position: relative;
    cursor: grab;
    // padding: 10px;
    // margin-left: 10px;
    // margin-bottom: 10px;
    border-top: 3px solid rgba(255, 255, 255, 0.9);
    border-left: 3px solid rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
`;

export const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
`;

export const Circle = styled.div`
    position: absolute;
    width: 400px;
    height: 350px;
    top: -4.2em;
    right: -9em;
    z-index: 5;
    background-color: #e7e6e6;
    border-radius: 50%
`;

export const TopContainer = styled.div`
    // width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 1em 15px;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex: 0.8;
    padding: 0 1em;
`;

export const PokedexWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Pokedex = styled(motion.div)`
    width: auto;
    height: 190px;
    z-index: 99;
    user-select: none;
    transform: translate3d(0, 0, 100px);

    img{
        width: 300px;
        height: 250px;
        user-select: none;
        transform: translate3d(0, 0, 100px);
    }
`;

export const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2px;
    line-height: 1.4;
`;

export const MediumText = styled.div`
    font-size: 28px;
    color: #000;
    font-weight: 800;
    text-transform: uppercase;
`;

export const SmallText = styled.div`
    font-size: 11px;
    color: #000;
    font-weight: 700;
    text-transform: uppercase;
`;

export const SpaceHorizontalContainer = styled.div`
    width: 100%;        
    display: block;
    justify-content: space-between;
    align-items: center;
`;

export const TypeAndWeakness = styled.div`
    padding: 2px;
    background-color: #fff;
    color: #464646;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #464646;
    display: inline-flex;
    flex-direction: column;
    outline: none;
    cursor: pointer;
    transition: all 290ms ease-in-out;
    border-radius: 15px;

    &:hover {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    }
`;

export const TypeSpaceContainer = styled.div` 
    padding: 4px;       
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

export const AbilitiesAndWeaknessWrapper = styled.div`
    max-width: 350px;
    max-height: 40px;
    pespective: 2000;
    margin: auto;
    alignment: center;
    border: 0.5px #cccc;
    box-shadow:0 0 15px 5 px grey;
    align-items: center;
    display: flex;
`; 

export const TopAWContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.6;
    position: relative;
    align-items: center;
    justify-content: center;
    // padding: 1em 15px;
`;

export const BottomAWContainer = styled.div`
    display: flex;
    flex: 1.4;
    align-items: center;
    justify-content: center;

`;

export const AbilitiesAndWeaknessCard = styled(motion.div)`
    width: 180px;
    heigth: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.6);
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    margin-left: 10px;
`;

export const AbilitiesAndWeaknessHeader = styled.h2`
    font-size: 18px;
    color: #000;
    display: inline-block;
    font-weight: 800;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 10px;
`;

export const AbilitiesAndWeakness = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
`; 