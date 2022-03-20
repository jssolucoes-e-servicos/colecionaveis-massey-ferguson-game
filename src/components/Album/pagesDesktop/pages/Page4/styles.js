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
