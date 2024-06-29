import React from "react";
import { ModalWindow } from "./styles";
export default function Modal({ imagePath, setModal }) {
  return (
    <ModalWindow
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModal(false);
        }
      }}
    >
      <i onClick={setModal} class="fa-solid fa-rectangle-xmark"></i>
      <img src={imagePath} alt="modal" />
    </ModalWindow>
  );
}
