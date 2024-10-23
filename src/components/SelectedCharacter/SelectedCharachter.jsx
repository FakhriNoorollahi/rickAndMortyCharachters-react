import React from "react";
import CharachterDetail from "../CharachterDetail/CharachterDetail";

import { useCharachter } from "../../Context/CharacterContext";

function SelectedCharachter() {
  const { charachterId } = useCharachter();

  if (!charachterId)
    return (
      <p style={{ flex: 1, color: "#cbd5e1" }}>Please select a character.</p>
    );

  return (
    <div style={{ flex: 1 }}>
      <CharachterDetail charachterId={charachterId} />
    </div>
  );
}

export default SelectedCharachter;
