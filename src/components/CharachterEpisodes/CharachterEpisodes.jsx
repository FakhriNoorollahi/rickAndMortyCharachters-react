import React, { useRef, useState } from "react";
import {
  HiOutlineArrowUpCircle,
  HiOutlineArrowDownCircle,
} from "react-icons/hi2";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

function CharachterEpisodes({ episode }) {
  const [sortBy, setSortBy] = useState(true);
  const episodesNumber = episode.map((e) => e.split("/").at(-1));
  const { isLoading, data: episodeInfo } = useFetch(
    `episode/${episodesNumber}`
  );

  let episodes;
  if (episodeInfo) {
    episodes = [episodeInfo].flat().slice(0, 7);
    if (sortBy) {
      episodes = [...episodes].sort(
        (a, b) => new Date(b.air_date) - new Date(a.air_date)
      );
    } else {
      episodes = [...episodes].sort(
        (a, b) => new Date(a.air_date) - new Date(b.air_date)
      );
    }
  }

  if (isLoading || !episodeInfo) return <Loader />;
  console.log(episodes);
  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes:</h2>
        <button onClick={(e) => setSortBy(!sortBy)}>
          {sortBy ? (
            <HiOutlineArrowUpCircle className="icon" />
          ) : (
            <HiOutlineArrowDownCircle className="icon" />
          )}
        </button>
      </div>
      <ul>
        {episodes.map((episode, index) => (
          <EpisodeItem key={episode.id} episode={episode} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default CharachterEpisodes;

function EpisodeItem({ episode, index }) {
  return (
    <li>
      <div>
        <span>
          {String(index + 1).padStart(2, 0)} - {episode.episode} :
        </span>
        <strong>{episode.name}</strong>
      </div>
      <div className="badge badge--secondary">{episode.air_date}</div>
    </li>
  );
}
