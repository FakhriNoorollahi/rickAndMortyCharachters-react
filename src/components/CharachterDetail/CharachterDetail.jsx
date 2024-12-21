import React from "react";
import Loader from "../Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import CharachterEpisodes from "../CharachterEpisodes/CharachterEpisodes";
import { useCharachter } from "../../Context/CharacterContext";

function CharachterDetail() {
  const { addToFavorite, favourites, charachterId } = useCharachter();
  const { isLoading, data: charachter } = useFetch(`character/${charachterId}`);

  if (isLoading || !charachter) return <Loader />;

  return (
    <div>
      <CharachterSubInfo
        charachter={charachter}
        addToFavorite={addToFavorite}
        favourites={favourites}
      />
      <CharachterEpisodes episode={charachter.episode} />
    </div>
  );
}

export default CharachterDetail;

function CharachterSubInfo({ charachter, addToFavorite, favourites }) {
  const isExist = favourites.map((item) => item.id).includes(charachter.id);

  return (
    <div className="character-detail">
      <img
        src={charachter.image}
        alt={charachter.name}
        className="character-detail__img"
      />
      <div className="character-detail__info">
        <h3 className="name">{charachter.name}</h3>
        <div className="info">
          <span
            className={`status ${
              charachter.status === "Dead"
                ? "red"
                : charachter.status === "unknown" && "white"
            }`}
          ></span>
          <span>&nbsp;{charachter.status}</span>
          <span> - {charachter.species}</span>
        </div>
        <div className="location">
          <p>Last known location: </p>
          <p>{charachter.location.name}</p>
        </div>
        <div className="actions">
          {isExist ? (
            <p style={{ color: "var(--slate-100)" }}>
              Already Added To Favourites✅
            </p>
          ) : (
            <button
              className="btn btn--primary"
              onClick={() => addToFavorite(charachter)}
            >
              Add To Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
