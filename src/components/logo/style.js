import styled from "styled-components";
import {media} from "../../global/variables";

export const LogoMain = styled.div`
  display: grid;
  grid-template-columns: 34px auto;
`

export const LogoImage = styled.img`
  width: 24px;
  height: 26px;
  
  @media (min-width: ${media.md}px) {
    width: 43px;
    height: 44px;
  }
`

export const LogoText = styled.div`
  text-align: left;
  @media (min-width: ${media.md}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    margin-top: -4px;
  }
`

export const LogoTitle = styled.span`
  text-align: left;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 600;
  font-size: 16px;
  display: inline-flex;
  align-items: center;

  @media (min-width: ${media.md}px) {
    width: 100%;
    font-size: 24px;
    align-items: flex-start;
  }
`

export const LogoSubtitle = styled.span`
  display: none;
  text-align: left;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 300;
  font-size: 12px;
  align-items: center;
  margin-top: -4px;
  @media (min-width: ${media.md}px) {
    display: block;
  }
`