import styled from "styled-components";

export const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(173, 216, 230);
  text-align: center;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    font-size: 25px;
  }

  img {
    width: 70%;
    height: 85%;
  }
`;
