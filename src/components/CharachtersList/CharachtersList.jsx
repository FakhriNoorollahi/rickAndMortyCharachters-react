import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import Loader from "../Loader/Loader";
import { useCharachter } from "../../Context/CharacterContext";
import NoResultFound from "../NoResultFound/NoResultFound";

function CharachtersList() {
  const [viewMore, setViewMore] = useState(false);
  const { isLoading, setCharachterId, allCharachters, charachterId } =
    useCharachter();

  const displayCharacter = (id) => {
    setCharachterId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="characters-list">
      {isLoading ? (
        <Loader />
      ) : allCharachters.length === 0 ? (
        <NoResultFound>
          <h4>There is no charachter</h4>
        </NoResultFound>
      ) : (
        <>
          <ul>
            <FoundedCharachters
              viewMore={viewMore}
              allCharachters={allCharachters}
              charachterId={charachterId}
              displayCharacter={displayCharacter}
            />
          </ul>
          {allCharachters.length > 5 && (
            <button
              className="badge btn--primary show-more"
              onClick={() => setViewMore((viewMore) => !viewMore)}
            >
              {viewMore ? "Hide" : "View More"}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default CharachtersList;

function FoundedCharachters({
  viewMore,
  allCharachters,
  charachterId,
  displayCharacter,
}) {
  const charachters = viewMore ? allCharachters : allCharachters.slice(0, 5);

  return (
    <>
      {charachters.map((charachter) => (
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
    </>
  );
}

export function CharachterItem({ charachter, children }) {
  return (
    <li className="list__item">
      <img src={charachter.image} alt={charachter.name} />
      <h3 className="name">
        <span> {charachter.gender === "famle" ? "👩🏻‍🦳" : "👱🏻‍♂️"}</span>
        <span>{charachter.name}</span>
      </h3>
      <div className="list-item__info">
        <div
          className={`status ${
            charachter.status === "Dead"
              ? "red"
              : charachter.status === "unknown" && "white"
          }`}
        ></div>
        <span className="info">
          &nbsp;{charachter.status} - {charachter.species}
        </span>
      </div>
      {children}
    </li>
  );
}
