import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import s from "./CharactersList.module.css";

export default function CharactersList(characters) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // console.log(location);
  return (
    <ul className={s.items}>
      {characters.movies.map(({ id, image, name, species, gender, status }) => (
        <li className={s.item} key={id}>
          <Link
            className={s.link}
            to={{
              // pathname: `characters/${id}`,
              state: {
                from: {
                  location,
                },
              },
            }}
          >
            <div className={s.wrapper}>
              <img className={s.image} src={image} alt="" />
              <div className={s.name}> {name}</div>
            </div>

            <div className={s.item_info}>
              <span> Species: {species}</span>
              <span> Gender: {gender}</span>
              <span> Status: {status}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
