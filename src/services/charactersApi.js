import axios from "axios";

export const fetchCharacter = async (page) => {
  return await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
};

export const fetchSearchCharacter = async (page, searchQuery) => {
  return await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
};

export default fetchCharacter;
