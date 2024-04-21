// components/NotesContainer.jsx
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import DropArea from "./DropArea";
const NotesContainer = ({
  notes,
  title,
  stati,
  onDelete,
  setActiveCard,
  onDrag,
  index,
}) => {
  const filteredNotes = notes.filter((note) => note.stati === stati);
  return (
    <div className="max-w-md p-5">
      <div className="text-2xl">{title}</div>
      <DropArea onDrag={() => onDrag(stati, 0)} />
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-5">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <React.Fragment key={index}>
              <div
                draggable="true"
                onDragStart={() => setActiveCard(index)}
                onDragEnd={() => setActiveCard(null)}
                className="px-4 py-3 border-b border-gray-300 cursor-grabbing"
              >
                <p className="text-gray-800 text-lg">{note.text}</p>
                {note.stati === "done" && (
                  <div className="flex justify-end items-center">
                    <button
                      onClick={() => onDelete(note._id)}
                      className="text-black hover:text-red-500 "
                    >
                      <MdDeleteForever size="1.5em" />
                    </button>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">no ToDo`s</p>
        )}
      </div>
      <DropArea onDrag={() => onDrag(stati, filteredNotes.length)} />
    </div>
  );
};

export default NotesContainer;
