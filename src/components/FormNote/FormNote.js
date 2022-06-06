import React, { useState } from "react";
import s from "./FormNote.module.css";

const FormNote = ({ onSubmit }) => {
  const [note, setNote] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget);
    switch (name) {
      case "note":
        setNote(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note, description);
    reset();
  };

  const reset = () => {
    setNote("");
    setDescription("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Note
        <input
          maxLength="20"
          className={s.input}
          type="text"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="note"
          value={note}
          onChange={handleChange}
          required
        />
      </label>

      <label className={s.label}>
        Description
        <textarea
          maxLength="90"
          className={s.textarea}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add note
      </button>
    </form>
  );
};

export default FormNote;
