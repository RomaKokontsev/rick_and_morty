import React from "react";
import NotesListItem from "./NotesListItem/NotesListItem";
import s from "./NotesList.module.css";

const NotesList = ({ notes, onDeleteNote, toggleComplete }) => {
  return (
    <ul className={s.list}>
      {notes.map(({ id, note, description, done }) => (
        <NotesListItem
          key={id}
          note={note}
          description={description}
          done={done}
          onClickDeleteNote={() => onDeleteNote(id)}
          toggleComplete={() => toggleComplete(id)}
        />
      ))}
    </ul>
  );
};

export default NotesList;
