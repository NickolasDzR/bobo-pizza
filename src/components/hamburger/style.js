import styled from "styled-components";

export const BurgerWrp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 500;
  
  &[data-type='card'] {
    top: -12px;
    right: -40px;
  }
`