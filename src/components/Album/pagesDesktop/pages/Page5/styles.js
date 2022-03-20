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

export const InfoContainer = styled.ul`
  list-style: none;

  > li {
    font-size: 0.7vw;
    opacity: 0.5;
    color: black;
    padding: 0.5vw 0.8vw;

    :not(:last-child) {
      margin-bottom: 0.5vw;
    }
  }
  > p {
    margin-top: 10px;
    margin-bottom: -5px;
    padding: 1em 1em;
    color: #fff;
    font-size: 0.7vw;
    opacity: 0.5;
  }
`;

export const InfoContainerBox = styled.div`
  border: solid 2px #e70a18;
  margin-top: 1vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 0.3vw;
  padding: 5px 8px 5px 4px;
`;

export const InfoContainerBoxG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InfoContainerBoxTxt = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6vw;
  color: #fff;
  margin-top: 10px;
`;

export const IconPin = styled.div`
  font-size: 0.6vw;
`;
