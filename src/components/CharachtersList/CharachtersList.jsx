import React from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import Loader from "../Loader/Loader";
import { useCharachter } from "../../Context/CharacterContext";

function CharachtersList() {
 
  const { isLoading, setCharachterId, allCharachters, charachterId } =
    useCharachter();
  const displayCharacter = (id) => {
    setCharachterId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="characters-list">
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {allCharachters.map((charachter) => (
            <CharachterItem key={charachter.id} charachter={charachter}>
              <button
                className="icon red"
                onClick={(e) => displayCharacter(charachter.id)}
              >
                {charachterId === charachter.id ? (
                  <HiOutlineEyeSlash />
                ) : (
                  <HiOutlineEye />
                )}
              </button>
            </CharachterItem>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharachtersList;

export function CharachterItem({ charachter, children }) {
  return (
    <li className="list__item">
      <img src={charachter.image} alt={charachter.name} />
      <h3 className="name">
        <span> {charachter.gender === "famle" ? "👩🏻‍🦳" : "👱🏻‍♂️"}</span>
        <span>{charachter.name}</span>
      </h3>
      <div className="list-item__info">
        <div className="status"></div>
        <span className="info">
          &nbsp;{charachter.status} - {charachter.species}
        </span>
      </div>
      {children}
    </li>
  );
}
