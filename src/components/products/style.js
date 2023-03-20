import styled from 'styled-components'
import {media} from "../../global/variables";

export const ProductsWrp = styled.section`

`
export const ProductInner = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 0;

  @media (min-width: ${media.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${media.md}px) {
    gap: 30px 15px;
  }

  @media (min-width: ${media.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${media.xl}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProductsItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (min-width: ${media.md}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ProductContentWrp = styled.div`
  text-align: left;

  @media (min-width: ${media.md}px) {
    flex: 1 1;
    display: flex;
    flex-direction: column;
  }
`

export const ProductsTitle = styled.p`
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  padding: 0;
  font-size: 18px;
  margin: 0 0 5px 0;

  @media (min-width: ${media.md}px) {
    font-size: 20px;
  }
`

export const ProductsAbout = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  color: rgb(129 135 144);
  margin-bottom: 10px;

  @media (min-width: ${media.md}px) {
    font-size: 14px;
    line-height: 1.1;
  }
`

export const ProductImage = styled.img`
  width: 110px;
  height: 100px;

  @media (min-width: ${media.sm}px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: ${media.md}px) {
    width: 100%;
    max-width: 375px;
    height: auto;
  }
`

export const ProductCost = styled.p`
  text-align: left;
  font-weight: 600;
  background-color: rgb(255, 105, 0);
  color: white;
  border-radius: 9999px;
  display: inline-block;
  margin-right: auto;
  padding: 6px 10px;
  
  @media (min-width: ${media.md}px) {
    margin-top: auto;
  }
`