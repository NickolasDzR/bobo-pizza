import styled from "styled-components";
import {breakpoints} from "../../global/variables";

export const BurgerWrp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 500;

  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`