import styled from "styled-components";

export const ImageContainer = styled.div`
  border-radius: 2px;
  cursor: pointer;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
