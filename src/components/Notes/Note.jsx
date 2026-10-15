import React, { useState } from "react";



const COLORS = [
  "#ffffff", "#f28b82", "#fbbc04", "#fff475",
  "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa",
  "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed",
];

const Note = (props) => {
  const { toggleModal, note, setSelectedNote, deleteNote, changeColor } = props;
  const [isHover, setIsHover] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  const noteClickHandler = () => {
    setSelectedNote(note);
    toggleModal();
  };

  const hoverOverHandler = () => setIsHover(true);

  const hoverOutHandler = () => {
    setIsHover(false);
    setShowPalette(false);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };

  const paletteHandler = (e) => {
    e.stopPropagation();
    setShowPalette((prev) => !prev);
  };

  const colorHandler = (e, color) => {
    e.stopPropagation();
    changeColor(note.id, color);
    setShowPalette(false);
  };

  const stopProp = (e) => e.stopPropagation();

  const isDefaultColor = !note.color || note.color === "#ffffff";


  return (
    <div
      className="note"
      id={note.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
      // style={{ backgroundColor: note.color }}

       style={{
    backgroundColor: isDefaultColor ? undefined : note.color,
    color: isDefaultColor ? undefined : "#202124",
  }}

    >
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip" onClick={paletteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Background Options</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind Me</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>

        <div className="tooltip" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>

      {showPalette && (
        <div className="color-palette" onClick={stopProp}>
          {COLORS.map((c) => (
            <div
              key={c}
              className="color-circle"
              style={{ backgroundColor: c }}
              onClick={(e) => colorHandler(e, c)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;