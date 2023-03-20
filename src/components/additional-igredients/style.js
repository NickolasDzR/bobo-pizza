import styled from "styled-components";
import Font, {media} from "../../global/variables"

export const IngredientsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (min-width: ${media.lg}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`

export const IngredientsItem = styled.li`
  cursor: pointer;
  box-shadow: rgba(6, 5, 50, 0.12) 0px 4px 20px;
  border-radius: 12px;
  padding: 8px;
  
  @media (min-width: ${media.lg}px) {
    display: flex;
    flex-direction: column;
  }
`

export const IngredientsImage = styled.img`
  width: 90px;
  height: auto;
`

export const IngredientsTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 20px;
`

export const IngredientsCost = styled.span`
  font-weight: 500;

  @media (min-width: ${media.lg}px) {
    margin-top: auto;
  }
`