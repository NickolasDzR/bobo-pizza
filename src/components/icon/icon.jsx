import React from 'react';
import styled from "styled-components";

export const Icon = ({ icon, ...props }) => {
    return (
        <Svg {...props} viewBox={icon.viewBox}>
            <use href={require(`../../assets/icons/${icon}.svg`)}></use>
        </Svg>
    );
};

const Svg = styled.svg`
  color: currentColor;

  & {
    fill: currentColor;
  }
`;
