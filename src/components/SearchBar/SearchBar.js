import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

function SearchBar({ onSubmit, onClearSearchBar }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const clearSearchBar = () => {
    setSearchQuery("");
    onClearSearchBar();
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search characters"
          value={searchQuery}
          onChange={handleInputChange}
        ></input>
      </label>
      <button type="submit" className={s.searchbutton}>
        Search
      </button>
      <button
        type="submit"
        className={[s.searchbutton, s.clear].join(" ")}
        onClick={clearSearchBar}
      >
        Clear
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onClearSearchBar: PropTypes.func.isRequired,
};

export default SearchBar;
