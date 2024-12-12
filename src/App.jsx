import "./App.css";
import { Toaster } from "react-hot-toast";
import AppHeader from "./components/AppHeader/AppHeader";
import { CharacterProvider } from "./Context/CharacterContext.jsx";
import Modal from "./components/Modal/Modal";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  return (
    <CharacterProvider>
      <Toaster />
      <Modal />
      <AppHeader />
      <ContentContainer />
    </CharacterProvider>
  );
}

export default App;
