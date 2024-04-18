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
  const { text, userId } = req.body;
  //   const authenticatedUserId = req.session.userId;

  try {
    if (!text) {
      throw createHttpError(400, "die Notiz benötigt einen Title");
    }

    const newNote = await NoteModel.create({
      userId: userId,

      text,
    });

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
