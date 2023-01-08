import React from "react";
import {
  DetailsContainer,
  MediumText,
  SmallText,
  SpaceHorizontalContainer,
  TypeAndWeakness,
  TypeSpaceContainer,
} from "./cardStyle";
import styleType from '../../pokeTypeDesign.json'

export const PokedexDetails = (props) => {
  let type = props.type;

  return (
    <DetailsContainer>
      <SmallText>{props.number}</SmallText>
      <SpaceHorizontalContainer>
        <MediumText>{props.name}</MediumText>
        {type.map((element) => {
            let typeKey = styleType.find(obj => obj.type === element);
            let style = typeKey.style;
            return (
                <TypeSpaceContainer>
                <TypeAndWeakness style={style}>{element}</TypeAndWeakness>
                </TypeSpaceContainer>
            );
        })}
      </SpaceHorizontalContainer>
    </DetailsContainer>
  );
}