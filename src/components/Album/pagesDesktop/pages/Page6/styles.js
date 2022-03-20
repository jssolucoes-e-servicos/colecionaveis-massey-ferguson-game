import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  > div {
    flex: 1;
  }
`;

export const InfoContainer = styled.ul`
  list-style: none;

  > li {
    font-size: 0.6em;
    opacity: 0.5;
    color: black;
    /* background: white; */
    padding: 0px 0px 12px 12px;
    color: #fff;
    font-weight: 800;
    padding: 0.5vw 0.8vw;

    :not(:last-child) {
      margin-bottom: 0.5vw;
    }
    > p {
      margin-top: 0;
      font-size: 1em;
      width: 80%;
    }
  }
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
