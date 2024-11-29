import React from "react";
import CharachterDetail from "../CharachterDetail/CharachterDetail";
import { useCharachter } from "../../Context/CharacterContext";

function SelectedCharachter() {
  const { charachterId } = useCharachter();

  if (!charachterId)
    return <p className="no-selectedItem">Please select a character.</p>;

  return (
    <div className="container__character-detail" style={{ flex: 1 }}>
      <CharachterDetail charachterId={charachterId} />
    </div>
  );
}

export default SelectedCharachter;
