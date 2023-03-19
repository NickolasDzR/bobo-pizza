import styled from "styled-components";

export const AnchorWrp = styled.div`
  min-width: max-content;
`

export const AnchorsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  min-width: max-content;
`

export const AnchorsItem = styled.li`
  background-color: rgb(243, 243, 247);
  padding: 8px 16px;
  border-radius: 9999px;
  
  & + & {
    margin-left: 15px;
  }
`

export const AnchorsLink = styled.a`
  color: rgb(92, 99, 112);
  text-decoration: none;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 600;
`