import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import s from "./NotesListItem.module.css";
import rick from "../../../img/rick.png";

const NotesListItem = ({
  note,
  description,
  onClickDeleteNote,
  toggleComplete,
  done,
}) => {
  const [checked, setChecked] = useState(done);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    toggleComplete();

    console.log(e.currentTarget);
  };
  console.log(checked);

  return (
    <li className={checked ? [s.item, s.done].join(" ") : s.item}>
      <button
        className={s.buttonClose}
        type="button"
        onClick={onClickDeleteNote}
      >
        <IoIosClose size="25px" />
      </button>
      <h3 className={s.title}>{note}</h3>
      {description.trim() === "" ? (
        <div className={s.no_description}>
          <img className={s.img} src={rick} alt="" />
        </div>
      ) : (
        <span className={s.description}>{description}</span>
      )}
      <div className={s.checkbox}>
        <FormControlLabel
          control={
            <Checkbox size="small" checked={checked} onChange={handleChange} />
          }
          label="Fulfilled"
        />
      </div>
    </li>
  );
};

export default NotesListItem;
