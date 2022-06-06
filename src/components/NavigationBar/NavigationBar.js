import { NavLink, Link } from "react-router-dom";
import s from "./NavigationBar.module.css";
import rick_morty from "../../img/RickAndMorty.png";

const NavigationBar = () => (
  <header className={s.header}>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          const linkClasses = [s.link];
          if (isActive) linkClasses.push(s.activeLink);

          return linkClasses.join(" ");
        }}
        exact="true"
      >
        Characters
      </NavLink>

      <NavLink
        to="/my-watch-list"
        className={({ isActive }) => {
          const linkClasses = [s.link];
          if (isActive) linkClasses.push(s.activeLink);

          return linkClasses.join(" ");
        }}
      >
        My watch list
      </NavLink>
    </nav>

    <img className={s.img} src={rick_morty} alt="" />
  </header>
);

export default NavigationBar;
