import React from "react";
import { HiOutlineXCircle, HiOutlineTrash } from "react-icons/hi2";
import { useCharachter } from "../../Context/CharacterContext";
import { CharachterItem } from "../CharachtersList/CharachtersList";

function Modal() {
  const { openModal, setOpenModal, favourites, deleteFavourite } =
    useCharachter();

  if (!openModal) return;
  return (
    <div>
      <div className="backdrop"></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">List of Favourites</h2>
          <button onClick={(e) => setOpenModal(false)}>
            <HiOutlineXCircle className="close icon" />
          </button>
        </div>
        <div>
          {favourites.map((charachter) => (
            <CharachterItem key={charachter.id} charachter={charachter}>
              <button
                className="icon red"
                onClick={(e) => deleteFavourite(charachter.id)}
              >
                <HiOutlineTrash />
              </button>
            </CharachterItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
