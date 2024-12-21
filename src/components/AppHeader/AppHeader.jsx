import React from "react";
import { GoHeart } from "react-icons/go";
import { useCharachter } from "../../Context/CharacterContext";
import logo from "/src/assets/images/logo.png";

function AppHeader() {
  const {
    search,
    handleSerach,
    allCharachters,
    openModal,
    setOpenModal,
    favourites,
  } = useCharachter();

  return (
    <div className="navbar ">
      <div className="navbar__logo">
        <span>Rick And Morty</span>
        <img src={logo} alt="logo" />
      </div>

      <input
        className="text-field"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSerach(e.target.value)}
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
