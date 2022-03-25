import styled, { css } from "styled-components";

// esses estilos serão aplicados quando a figurinha correta estiver sendo arrastada para este espaço no álbum
const isOverStyles = css`
  background: darkred;
  color: white;
  :hover {
    transition: 2s;
  }
  /* @keyframes is-rotating {
    to {
      border-radius: 5px;

      transform: rotate(1turn);
    }
  } */
`;
const multiFigures = css`
  margin-left: -4px !important;
  @media (max-width: 360px) {
    margin-left: -8px !important;
  }
  @media (max-width: 340px) {
    margin-left: -3px !important;
  }
  @media (max-width: 320px) {
    margin-left: -15px !important;
    /* margin-left: -1px !important; */
  }
`;

const uniFigures = css`
  width: 100%;
  min-width: 78px;
  height: 34vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(0 0 0 / 10%);
  /* background-color: rgba(255, 255, 255, 0.1); */
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  color: rgb(76 71 71 / 50%);
  font-size: 3.5vw;
  font-weight: 800;
`;

const BorderNone = css`
  border: none !important;
`;

export const StickerContainer = styled.div`
  width: 100%;
  min-width: 82px;
  height: 34vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  font-size: 3.5vw;
  font-weight: 800;

  ${({ isOver }) => isOver && isOverStyles}
  ${({ multi }) => multi && multiFigures}
  ${({ obtained }) => obtained && BorderNone}
  > span {
    background-color: #fff;
    width: 50px;
    max-width: 40px;
    height: 50px;
    max-height: 40px;
    border-radius: 50px;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
`;

export const ObtainedStickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StickerImageContainer = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 100%;
    width: auto;
  }
`;

export const StickerId = styled.span`
  position: absolute;
  top: 0.3vw;
  right: 0.3vw;
  --size: 1vw;
  font-size: 0.8vw;
  width: var(--size);
  min-width: var(--size);
  height: var(--size);
  min-height: var(--size);
  background-color: darkred;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// p nome cartão album
export const StickerTitle = styled.p`
  /* margin-left: 2px; */
  margin: 0;
  font-size: 6px;
  margin-bottom: 0;
  font-weight: bold;
  width: 100%;
  max-width: 80px;
  min-height: 20px;
  height: 20px;
  //background: red;
  text-align: center;
`;

//bloco das cartas no mobile
export const StickerWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: start;
  flex-direction: column;

  /* background-color: red; */
`;

export const StickersRows = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* background-color: red; */
  /* 
  display: flex;
  margin-top: 3vw;
  width: 5vw; */
  /* justify-content: center; */
  /* align-items: center;
  flex-wrap: wrap; */
  /* margin-top: 3vw; */
`;
