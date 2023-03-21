import styled from "styled-components";
import {media} from "../../global/variables";
import {ReactComponent as Remove} from "../../assets/icons/remove-circle.svg";
import {ToggleBtn} from "../toggle-btn/toggle-btn";
import {AdditionalIngredients} from "../additional-igredients/additional-ingredients";
import Button from "../button/button";

export const CardWrp = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

export const CardOverlay = styled.div`
  background-color: white;
  position: absolute;
  inset: 0;

  @media (min-width: ${media.lg}px) {
    background-color: black;
    opacity: 0;
  }
`

export const CardBlock = styled.div`
  position: absolute;
  inset: 0;
  
  @media (min-width: ${media.lg}px) {
    width: 924px;
    height: 610px;
    max-height: 100%;
    inset: auto;
    background-color: white;
    border-radius: 24px;
  }
`

export const CardBlockWrp = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 72px;

  @media (min-width: ${media.lg}px) {
    padding: inherit;
    overflow: inherit;
    display: grid;
    grid-template-columns: 540px auto;
    grid-gap: 10px;
  }
`

export const CardImgWrp = styled.div`
  height: 0;

  @media (min-width: ${media.lg}px) {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CardImg = styled.img`
  position: absolute;
  width: 95%;
  top: 0;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 456px;
  
  @media (min-width: ${media.lg}px) {
    position: static;
    width: 85%;
    height: auto;
    transform:inherit;
    max-width: 100%;
  }
`

export const CardContent = styled.div`
  padding-top: 60vh;

  @media (min-width: ${media.lg}px) {
    padding: 30px 0px;
    overflow: auto;
  }
`

export const CardContentInner = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  padding: 0 15px;
  
  @media (min-width: ${media.md}px) {
    backdrop-filter: inherit;
  }
`

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 7px;
`

export const CardDetail = styled.span`
  text-align: left;
  display: inline-block;
  width: 100%;
  color: rgb(92, 99, 112);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4px;
`

export const CardTags = styled.div`
  text-align: left;
  margin-bottom: 15px;
`

export const CardTag = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: calc(100% - 24px);
    height: 1px;
    border-bottom: 1px dashed rgb(92, 99, 112);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const RemoveIcon = styled(Remove)`
  margin-left: 3px;
`

export const CardToggleBtn = styled(ToggleBtn)`
  margin-bottom: 10px;
`

export const CardAdditionalIngr = styled(AdditionalIngredients)`
  margin-bottom: 15px;
`

export const CardFooterMob = styled.div`
  height: 72px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform 450ms cubic-bezier(0.5, 1, 0.5, 1) 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(6, 5, 50, 0.12) 4px 4px 40px;
`

export const CardFooterDesk = styled(CardFooterMob)`
  position: absolute;
  width: 359px;
  right: 0;
  left: auto;
  box-shadow: none;
`

export const CardAddToCartBtn = styled(Button)`
  z-index: 1;
  position: absolute;
  width: max-content;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`