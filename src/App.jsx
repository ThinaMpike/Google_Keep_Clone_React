
import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Form from './components/Form/Form'
import Notes from './components/Notes/Notes'
import Modal from './components/Modal/Modal'



// const NOTES = []

// const App = () => {

//   const [notes, setNotes] = useState(NOTES);

const App = () => {

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("notes");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to load notes:", err);
      return [];
    }
  });

  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- dark mode state ---
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);


  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  // --- end dark mode ---

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const editNote = (editedNote) => {
    setNotes(prevNotes => {
      const newArray = prevNotes.map(note => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title
          note.text = editedNote.text
        }
        return note;
      })
      return newArray
    })
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => id !== note.id));
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      {/* pass theme props to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </>
  )
}

export default App;