import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  > div {
    flex: 1;
  }
`;

export const StickerContainerP3 = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  /* width: 48%; */
  height: auto;
`;
export const Boxs = styled.div`
  display: -ms-flexbox;
  display: inline-block;
  justify-content: center;
  align-items: center;
  left: 5px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 5vw;
  /* background-color: rosybrown; */
  /* width: 100%; */
`;

export const StickerContainerP3B = styled.div`
  margin-top: 6%;
  width: 100%;
  height: 39vw;
  background-color: #e91e63;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

export const StickerP3B = styled.div`
  width: 100px;
  height: 100px;
`;

export const InfoContainer = styled.ul`
  list-style: none;

  > li {
    font-size: 0.6em;
    opacity: 0.5;
    color: black;
    /* background: white; */
    padding: 20px 2px 10px 0px;
    color: #fff;
    font-weight: 800;

    :not(:last-child) {
      margin-top: 5px;
      margin-bottom: 0.1vw;
    }
  }

  > p {
    margin-top: 0;
    font-size: 0.8em;
    width: 80%;
  }
`;
export const BoxxT = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 3vw;
  /* width: 100%; */
  /* background: red; */
  align-items: center;
`;
export const Boxcards = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  /* background-color: purple; */
  padding: 0;
  min-width: 90px;
`;
export const Boxborder = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-pack: center;
  -ms-flex-align: center;
`;
export const ImagesS = styled.div`
  width: 100px;
  height: auto;
`;
