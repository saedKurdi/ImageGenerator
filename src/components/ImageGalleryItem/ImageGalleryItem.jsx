import React from "react";
import { ImageContainer } from "./styles";

export default function ImageGalleryItem({ hit, openModal }) {
  return (
    <ImageContainer onClick={openModal}>
      <img src={hit.previewURL} alt="Image" />
    </ImageContainer>
  );
}
