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

const BorderNone = css`
  border: none !important;
  margin-left: -1px;
  margin-right: -1px;
`;

export const StickerContainer = styled.div`
  width: 6vw;

  height: 9vw;

  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  /* font-size: 1.5vw; */
  font-weight: 800;
  ${({ isOver }) => isOver && isOverStyles}
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
    font-size: 15px;
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
    width: 6vw;
  }
`;

export const StickerId = styled.span`
  position: absolute;
  top: 0.2vw;
  right: 0.2vw;
  --size: 1vw;
  font-size: 0.6vw;

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

export const StickerTitle = styled.p`
  font-family: "Roboto";
  margin: 0;
  font-size: 0.6vw;
  margin-bottom: 5px;
  font-weight: 900;
  color: #fff;
  min-height: 25px;
  /* background-color: red; */
  text-align: start;
`;
export const StickerTitlePage = styled.p`
  margin: 0;
  font-size: 0.5vw;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const StickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickersRows = styled.div`
  display: flex;
  margin-top: 3vw;
  width: 5vw;
`;
