import styled from "styled-components";

export const StickersContainer = styled.div`
  display: flex;
  margin-top: 3vw;
  width: 5vw;
`;

export const StickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickerTitle = styled.p`
  margin: 0;
  font-size: 0.8vw;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StickerDescription = styled.p`
  margin: 0;
  font-size: 0.6vw;
  line-height: 0.65vw;
  margin-top: 5px;
  font-weight: lighter;
  opacity: 0.7;

  > b {
    font-weight: bold;
  }
`;
