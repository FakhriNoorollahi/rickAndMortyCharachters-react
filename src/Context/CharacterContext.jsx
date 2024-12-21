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
  const [debounceTime, setDebounceTime] = useState(null);

  async function fetchData(search) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
      setAllCharachters(data.results);
    } catch (error) {
      toast.error(error.response.data.error);
      setAllCharachters([]);
    } finally {
      setIsLoading(false);
    }
  }

  const addToFavorite = (charachter) => {
    const isExist = favourites.map((item) => item.id).includes(charachter.id);

    if (!isExist) setFavourites((prev) => [...prev, charachter]);
  };

  const deleteFavourite = (id) => {
    const filteredFav = favourites.filter((item) => +item.id !== +id);
    setFavourites(filteredFav);
  };

  const handleSerach = (value) => {
    setSearch(value);

    if (debounceTime) {
      clearTimeout(debounceTime);
    }

    const timeout = setTimeout(() => {
      fetchData(value);
    }, 500);

    setDebounceTime(timeout);
  };

  useEffect(() => {
    fetchData(search);
  }, []);

  return (
    <CharachterContext.Provider
      value={{
        search,
        handleSerach,
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
