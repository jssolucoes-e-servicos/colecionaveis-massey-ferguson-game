import styled from "styled-components";

export const StickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickerDescription = styled.p`
  margin-top: 2px;
  /* margin: 0; */
  font-size: 6px;
  line-height: 8px;
  /* margin-top: 0px; */
  font-weight: inherit;
  opacity: 0.7;
  max-width: 84px;
  height: auto;

  > b {
    font-weight: bold;
  }
`;

export const VidTxt = styled.div`
  width: 100%;
  padding: 0 0 0 0;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Capas = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("https://www.colecionaveismassey.com.br/assets/images/bgs/Capa.png");
  background-size: 100% 100%;
  @media (max-width: 900px) {
    height: 250px;
    width: 80%;
    max-height: 220px;
  }
`;
