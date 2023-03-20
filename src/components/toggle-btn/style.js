import styled from "styled-components";

export const ToggleBtnWrp = styled.div`
  background-color: rgb(243, 243, 247);
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 9999px;
  overflow: hidden;
`

export const ToggleBtnInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding-left: 2px;
`

export const ToggleBtnSpan = styled.span`
  position: relative;
  display: inline-block;
  flex: 1 1 0;
  text-align: center;
  z-index: 1;
`

export const ToggleBtnLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  height: 100%;
  width: 100%;
  display: inline-block;
  line-height: 32px;
  padding-bottom: 2px;
`

export const ToggleBtnInput = styled.input.attrs(props => ({
    type: "radio",
}))`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`

export const ToggleBtnLine = styled.div`
  position: absolute;
  left: 0;
  top: 2px;
  bottom: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(6, 5, 50, 0.19) 0px 6px 20px;
  border-radius: 9999px;
  transition: left .3s ease;
`