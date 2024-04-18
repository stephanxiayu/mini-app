import React, { useState, useEffect } from "react";
import * as API from "../../network/api";
import { useUser } from "../../provider/UserProvider";

const TaskScreen = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useUser(); // Hook wird korrekt aufgerufen.

  useEffect(() => {
    const getNotes = async (userId) => {
      try {
        const fetchedNotes = await API.getNotes(userId);
        setNotes(fetchedNotes);
        console.log("Fetched notes:", fetchedNotes);
      } catch (error) {
        console.error(`Error fetching notes: ${error}`);
      }
    };

    if (user?._id) {
      console.log(`Fetching notes for user ID: ${user._id}`);
      getNotes(user._id); // Rufen Sie die Funktion mit der user ID auf.
    }
  }, [user]); // Depend on the user object

  return (
    <>
      <div className="text-center text-black border border-cyan-300">
        {notes.map((note) => (
          <div key={note._id}>{note.text}</div>
        ))}
        TaskScreen
      </div>
    </>
  );
};

export default TaskScreen;
