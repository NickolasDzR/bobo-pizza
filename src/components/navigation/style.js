import styled from "styled-components";
import {breakpoints} from "../../global/variables"

export const NavigationWrp = styled.nav`
  position: fixed;
  inset: 0;
  background-color: #000;
  transform: translatex(-100%);
  transition: transform .3s ease;

  &.active {
    transform: translatex(0);
  }

  @media (min-width: ${breakpoints.md}px) {
    position: static;
    transform: translateX(0);
    background-color: transparent;
  }
`

export const NavigationInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
  
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
    justify-content: flex-end;
  }
`

export const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  list-style: none;

  & li + li {
    margin-top: 15px;
  }

  @media (min-width: ${breakpoints.md}px) {
    position: static;
  }
`

export const NavigationItem = styled.li`
  text-align: left;
  @media (min-width: ${breakpoints.md}px) {
    background-color: rgb(243, 243, 247);
    display: none;
    padding: 8px 16px;
    border-radius: 9999px;
    &:first-child {
      display: block;
    }
  }
`

export const NavigationAnchor = styled.a`
  text-decoration: none;
  color: white;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 600;

  @media (min-width: ${breakpoints.md}px) {
    color: rgb(92, 99, 112);
  }
`