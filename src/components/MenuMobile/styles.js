import styled, { css } from "styled-components";

export const ContainerMobile = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  bottom: 0;
  position: fixed;
  z-index: 999999;
  overflow: hidden;
  .active {
    transition: all 5s ease-in-out;
    display: flex;
  }

  @media (min-width: 1100px) {
    display: none !important;
  }
`;

export const Btnmobile = styled.button`
  padding: 0px 0px 9px 0px;
  width: 100%;
  max-width: 100%;
  height: 10%;
  border: none;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: 2s;
  background: #000;

  ${(props) =>
    props.corner === "rounded" &&
    css`
      background-color: blue;
    `}
`;
export const Txtbtnmobile = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover Spann1 {
    width: 100%;
  }

  ${({ isOver }) => isOver && Spann1}
`;
export const Imabtnmobi = styled.img`
  width: 100%;
  max-width: 20px;
  padding: 10px 0 0 0;
`;
export const Sptxt = styled.text`
  padding-top: 5px;
  font-size: 0.6em;
`;
export const Spann = styled.span`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50px;
  z-index: 2;
  :nth-child(1) {
    top: 0;
    left: 0%;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, red);
  }
`;
export const Spann1 = styled.div`
  width: 50px;
  height: 2px;
  top: 0;
  left: -100%;
  background: blue;
  transition: 1s;

  z-index: 1;
  background: linear-gradient(to right, transparent, yellow);
  :hover {
    width: 100%;
  }
`;
