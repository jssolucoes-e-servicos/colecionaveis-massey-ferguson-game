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
    font-size: 0.7vw;
    opacity: 0.5;
    color: black;
    background: white;
    padding: 0.5vw 0.8vw;

    :not(:last-child) {
      margin-bottom: 0.5vw;
    }
  }
`;
export const Boxs = styled.div`
  display: -ms-flexbox;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 5px;
  /* background-color: rosybrown; */
  /* width: 100%; */
`;
