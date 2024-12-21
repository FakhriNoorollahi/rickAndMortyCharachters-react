import React from "react";
import CharachterDetail from "../CharachterDetail/CharachterDetail";
import { useCharachter } from "../../Context/CharacterContext";
import NoResultFound from "../NoResultFound/NoResultFound";

function SelectedCharachter() {
  const { charachterId } = useCharachter();

  if (!charachterId) {
    return (
      <NoResultFound>
        <h4>There is no selceted charachter </h4>
        <p className="no-selectedItem">Please select a character.</p>
      </NoResultFound>
    );
  }

  // return ;

  return (
    <div className="container__character-detail" style={{ flex: 1 }}>
      <CharachterDetail />
    </div>
  );
}

export default SelectedCharachter;
