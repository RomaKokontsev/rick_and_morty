import { useState, useEffect } from "react";
import CharactersList from "../components/CharactersList/CharactersList";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import {
  fetchCharacter,
  fetchSearchCharacter,
} from "../services/charactersApi";
import s from "./view.module.css";

export default function HomeView() {
  const [characters, setCharacters] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  console.log(characters);

  useEffect(() => {
    fetchCharacter(page)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log("Error has occurred: ", err);
      });
  }, [page]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchSearchCharacter(page, searchQuery)
      .then((res) => {
        if (!res.data.results.length) {
          alert("No result:(  try again");
          return;
        }
        setCharacters(res.data);
      })
      .catch((error) => alert("Smth went wrong:( please try again"));
  }, [page, searchQuery]);

  const onChangePage = (e, p) => {
    setPage(p);
  };

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  const onClearSearchBar = () => {
    setPage(1);
  };

  return (
    <>
      <h2>Characters</h2>
      <SearchBar onSubmit={onSubmit} onClearSearchBar={onClearSearchBar} />

      {characters ? (
        <>
          <CharactersList movies={characters.results} />
          <div className={s.pagination_wrapper}>
            <Pagination
              count={characters?.info.pages}
              onChange={onChangePage}
              page={page}
              color="primary"
            />
          </div>
        </>
      ) : (
        <div>Loading......</div>
      )}
    </>
  );
}
