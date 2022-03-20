import styled from "styled-components";

export const StickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickerDescription = styled.p`
  margin: 0;
  font-size: 0.6vw;
  line-height: 0.65vw;
  margin-top: 5px;
  font-weight: lighter;
  opacity: 0.7;
  color: #9a9a9a;

  > b {
    font-weight: bold;
  }
`;
