import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CharachtersList from "./components/CharachtersList/CharachtersList";

import { Toaster } from "react-hot-toast";
import SelectedCharachter from "./components/SelectedCharacter/SelectedCharachter";
import { CharacterProvider } from "./Context/CharacterContext";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <CharacterProvider>
      <Toaster />
      <Modal />
      <AppHeader />
      <div className="main">
        <CharachtersList />
        <SelectedCharachter />
      </div>
    </CharacterProvider>
  );
}

export default App;
