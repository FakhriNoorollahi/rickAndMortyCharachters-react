import React from "react";
import { GoHeart } from "react-icons/go";
import { useCharachter } from "../../Context/CharacterContext";

function AppHeader() {
  const {
    search,
    setSearch,
    allCharachters,
    openModal,
    setOpenModal,
    favourites,
  } = useCharachter();

  return (
    <div className="navbar ">
      <div className="navbar__logo">LOGO💟</div>
      <input
        className="text-field"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="navbar__result">
        Found {allCharachters.length} charachters
      </div>
      <button className="heart" onClick={(e) => setOpenModal(!openModal)}>
        <GoHeart className="icon" />
        <div className="badge">{favourites.length}</div>
      </button>
    </div>
  );
}

export default AppHeader;
