import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CharachterContext = createContext();

export function CharacterProvider({ children }) {
  const [allCharachters, setAllCharachters] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charachterId, setCharachterId] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addToFavorite = (id) => {
    const findCharacter = allCharachters.find((item) => +item.id === +id);
    setFavourites((prev) => [...prev, findCharacter]);
  };

  const deleteFavourite = (id) => {
    const filteredFav = favourites.filter((item) => +item.id !== +id);
    setFavourites(filteredFav);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getFetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${search}`,
          signal
        );
        setAllCharachters(data.results);
      } catch (error) {
        toast.error(error.response.data.error);
        setAllCharachters([]);
      } finally {
        setIsLoading(false);
      }
    }
    getFetchData();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <CharachterContext.Provider
      value={{
        search,
        setSearch,
        allCharachters,
        isLoading,
        setCharachterId,
        charachterId,
        addToFavorite,
        openModal,
        setOpenModal,
        favourites,
        deleteFavourite,
      }}
    >
      {children}
    </CharachterContext.Provider>
  );
}

export const useCharachter = () => {
  return useContext(CharachterContext);
};
