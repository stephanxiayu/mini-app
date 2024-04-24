import React, { useState, useEffect } from "react";
import * as API from "../../network/api";
import { useUser } from "../../provider/UserProvider";
import NotesContainer from "./NoteContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskScreen = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { user } = useUser(); // Hook wird korrekt aufgerufen.
  const [activeCard, setActiveCard] = useState("");
  const [updateNoteId, setUpdateNoteId] = useState("");

  useEffect(() => {
    if (user?._id) {
      getNotes(user._id);
    }
  }, [user, updateNoteId]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const getNotes = async (userId) => {
    try {
      const fetchedNotes = await API.getNotes(userId);
      setNotes(fetchedNotes);
    } catch (error) {
      console.error(`Error fetching notes: ${error}`);
    }
  };
  const createNote = async () => {
    try {
      if (inputValue === "") {
        return toast.error("no text");
      }
      const note = { text: inputValue, userId: user._id, stati: "aktiv" };

      const newNote = await API.createNote(note);
      if (newNote) {
        setNotes([...notes, newNote]);
        setInputValue("");
        toast.success("note created");
      } else {
        toast.error("note created");
      }
    } catch (error) {
      console.log(error);
      toast.error("note created");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote();
  };

  const handleDelete = (noteId) => {
    const deleteNote = { noteId: noteId, userId: user._id };

    try {
      const deletedNote = API.deleteNote(deleteNote);
      console.log(deletedNote);
      setNotes((currentNotes) =>
        currentNotes.filter((note) => note._id !== noteId)
      );
      toast.warning("Note deleted");
    } catch (error) {
      console.log(error);
      toast.error("note created");
    }
  };

  const onDrag = async (stati, _id) => {
    if (activeCard === null) {
      return toast.error("scheiße");
    }
    console.log(
      `Verschiebe Karte ${activeCard} in ${stati} an der Position ${_id}`
    );

    if (!user._id) {
      console.error("UserID ist nicht verfügbar.");
      toast.error("Ein Fehler ist aufgetreten: UserID ist erforderlich.");
      return;
    }
    const noteToMove = notes.find((note) => note._id === activeCard);
    // noteToMove._id;

    // Erstelle ein neues Array, indem du die Notiz direkt an der neuen Position einfügst
    const updatedNotes = JSON.parse(JSON.stringify(notes)).filter(
      (note) => note._id !== activeCard
    ); // Entferne die alte Position der Notiz
    updatedNotes.splice(_id, 0, { ...noteToMove, stati: stati }); // Füge die Notiz an der neuen Position ein
    setActiveCard(null);
    setNotes(updatedNotes);
    console.log(`Update Note ID: ${noteToMove._id} to new status: ${stati}`);
    try {
      console.log(`Update Note ID: ${noteToMove._id} to new status: ${stati}`);

      const response = await API.updateNoteStatus({
        noteId: noteToMove._id,
        userId: user._id,
        stati: stati,
      });
      console.log("after await:", response);

      // Nach erfolgreichem Update:
      setUpdateNoteId(noteToMove._id);
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Notiz: ", error);
      toast.error("Fehler beim Aktualisieren der Notiz");
    }
  };

  // const handleDrop = async (droppedNoteId, newStati) => {
  //   // // Optimistisches Update des lokalen Zustands
  //   // const provisionalUpdatedNotes = notes.map((note) => {
  //   //   return note._id === droppedNoteId ? { ...note, stati: newStati } : note;
  //   // });
  //   // setNotes(provisionalUpdatedNotes);
  //   // try {
  //   //   const response = await API.updateNoteStatus({
  //   //     noteId: droppedNoteId,
  //   //     userId: user._id,
  //   //     stati: newStati,
  //   //   });
  //   //   console.log(response);
  //   //   toast.success("Notiz aktualisiert");
  //   // } catch (error) {
  //   //   console.error("Fehler beim Aktualisieren der Notiz: ", error);
  //   //   toast.error("Fehler beim Aktualisieren der Notiz");
  //   //   setNotes(notes);
  //   // }
  // };

  return (
    <>
      <div className="text-center text-black p-20">
        <ToastContainer theme="dark" />
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border rounded py-2 px-4"
            placeholder="Enter your ToDO"
          />
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded ml-2 p-5"
          >
            Add new ToDO
          </button>
        </form>
        <div className="flex justify-center space-x-4 p-5">
          <NotesContainer
            setActiveCard={setActiveCard}
            notes={notes}
            title="Active To-Do"
            stati="aktiv"
            onDrag={onDrag}
            // onDrop={handleDrop}
          />
          <NotesContainer
            setActiveCard={setActiveCard}
            notes={notes}
            title="Work in Progress"
            stati="progress"
            onDrag={onDrag}
            // onDrop={handleDrop}
          />
          <NotesContainer
            setActiveCard={setActiveCard}
            onDelete={handleDelete}
            notes={notes}
            title="ToDo is Done"
            stati="done"
            onDrag={onDrag}
            // onDrop={handleDrop}
          />
        </div>
      </div>
    </>
  );
};

export default TaskScreen;
