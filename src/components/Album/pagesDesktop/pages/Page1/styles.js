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

  > b {
    font-weight: bold;
  }
`;
export const Capas = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("https://www.colecionaveismassey.com.br/assets/images/bgs/Capa.png");
  background-size: 100% 100%;
  @media (max-width: 900px) {
    width: 95%;
  }
`;
