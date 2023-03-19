import styled from 'styled-components'
import {breakpoints} from "../../global/variables";

export const ProductsWrp = styled.section`

`
export const ProductInner = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 0;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.xl}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProductsItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;
`

export const ProductContentWrp = styled.div`
  text-align: left;
`

export const ProductsTitle = styled.p`
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  padding: 0;
  font-size: 18px;
  margin: 0 0 5px 0;
`

export const ProductsAbout = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  color: rgb(129 135 144);
  margin-bottom: 10px;
`

export const ProductImage = styled.img`
  width: 110px;
  height: 100px;
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
`