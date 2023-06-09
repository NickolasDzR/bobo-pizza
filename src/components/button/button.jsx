import React from 'react';
import styled from "styled-components";

export const ButtonTag = styled.button`
  height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  outline: none;
  border: none;
  border-radius: 9999px;
  text-align: center;
  font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
`

const Button = ({text, className}) => {
    return (
        <ButtonTag className={className}>{text}</ButtonTag>
    );
}

export default Button;