import styled from "styled-components";
import {breakpoints} from "../../global/variables";

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
  
  @media (min-width: ${breakpoints.md}px) {
    background-color: black;
    opacity: .7;
  }
`

export const CardBlock = styled.div`
  position: absolute;
  inset:0;
`

export const CardImgWrp = styled.div`
    height: 0;
`

export const CardImg = styled.img`
  position: absolute;
  width: 95%;
  top: 0;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
`

export const CardContent = styled.div`
  padding-top: 60vh;

`

export const CardContentInner = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  padding: 0 15px;
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
`

export const CardTags = styled.ul`
  text-align: left;
`

export const CardTag = styled.li`
  text-decoration: dashed underline;
  display: inline;
`