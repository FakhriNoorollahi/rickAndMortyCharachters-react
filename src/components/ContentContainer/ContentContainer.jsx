import React from "react";
import { useCharachter } from "../../Context/CharacterContext";
import CharachtersList from "../CharachtersList/CharachtersList";
import SelectedCharachter from "../SelectedCharacter/SelectedCharachter";

function ContentContainer() {
  const { allCharachters } = useCharachter();
  return (
    <div className="main">
      {allCharachters.length !== 0 ? (
        <>
          <CharachtersList />
          <SelectedCharachter />
        </>
      ) : (
        <NoResultFound />
      )}
    </div>
  );
}

export default ContentContainer;

function NoResultFound() {
  return (
    <div className="no-result-found">
      <img src="/src/assets/images/no-result-found-icon.png" />
      <h4>There is no charachter</h4>
    </div>
  );
}
