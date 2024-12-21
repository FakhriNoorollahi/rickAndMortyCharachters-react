import React from "react";
import CharachtersList from "../CharachtersList/CharachtersList";
import SelectedCharachter from "../SelectedCharacter/SelectedCharachter";

function ContentContainer() {
  return (
    <div className="main">
      <CharachtersList />
      <SelectedCharachter />
    </div>
  );
}

export default ContentContainer;
