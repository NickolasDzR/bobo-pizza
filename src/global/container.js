import styled, {css} from "styled-components";

export const ContainerStyles = css`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1280px;
`

export const Container = styled.div`
  ${() => ContainerStyles}
`;
