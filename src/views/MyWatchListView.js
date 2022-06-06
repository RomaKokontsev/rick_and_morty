import React, { useState, useEffect } from "react";
import shortid from "shortid";
import FormNote from "../components/FormNote/FormNote";
import NotesList from "../components/NotesList/NotesList";

export default function MyWatchListView() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(window.localStorage.getItem("notes")) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note, description) => {
    const newNote = {
      id: shortid.generate(),
      note,
      description,
      done: false,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const toggleComplete = (noteId) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <>
      <h2>Viewing Notes</h2>
      <FormNote onSubmit={addNote} />
      <NotesList
        notes={notes}
        onDeleteNote={deleteNote}
        toggleComplete={toggleComplete}
      />
    </>
  );
}
