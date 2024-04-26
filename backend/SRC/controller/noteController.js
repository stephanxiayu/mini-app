import createHttpError from "http-errors";
import mongoose from "mongoose";

import NoteModel from "../models/notes.js";

export const getNotes = async (req, res, next) => {
  const userId = req.query.userId;

  try {
    if (!userId) {
      throw createHttpError(400, "keine gültige UserId ");
    }
    const notes = await NoteModel.find({ userId: userId }).exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote = async (req, res, next) => {
  const noteId = req.params.noteId;
  const authenticatedUserId = req.session.userId;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "keine gültige Notiz ID");
    }
    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "die Notiz nicht gefunden");
    }
    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "401 error");
    }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};
export const createNote = async (req, res, next) => {
  const { text, userId, stati } = req.body;
  //   const authenticatedUserId = req.session.userId;

  try {
    if (!text) {
      throw createHttpError(400, "die Notiz benötigt einen Title");
    }

    const newNote = await NoteModel.create({
      userId: userId,
      stati: stati,
      text,
    });

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
export const deleteNote = async (req, res, next) => {
  const userId = req.query.userId;
  const noteId = req.query.noteId;

  try {
    if (!userId) {
      throw createHttpError(400, "keine gültige UserId");
    }
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      throw createHttpError(400, "keine gültige Notiz ID");
    }

    const note = await NoteModel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Notiz nicht gefunden");
    }

    // Hier solltest du auch überprüfen, ob die Note dem User gehört
    if (note.userId.toString() !== userId) {
      throw createHttpError(403, "Nicht berechtigt, diese Notiz zu löschen");
    }

    await NoteModel.findOneAndDelete({ _id: noteId });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
export const updateNoteStatus = async (req, res, next) => {
  const { noteId, userId, stati } = req.body; // Assuming you're sending userId in the body. If not, adjust accordingly.

  noteId;
  try {
    if (!noteId) {
      throw createHttpError(400, "keine gültige Notiz ID");
    }
    if (!userId) {
      throw createHttpError(400, "UserID ist erforderlich");
    }
    if (!stati) {
      throw createHttpError(400, "Status erforderlich");
    }

    const note = await NoteModel.findById(noteId);
    if (!note) {
      throw createHttpError(404, "die Notiz nicht gefunden");
    }

    // Verify that the note belongs to the user making the request
    if (!note.userId.equals(userId)) {
      throw createHttpError(
        403,
        "Nicht berechtigt, den Status dieser Notiz zu aktualisieren"
      );
    }

    // Update the status of the note
    note.stati = stati;
    await note.save();

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};
