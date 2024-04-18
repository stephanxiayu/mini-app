import express from "express";
const router = express.Router();
import * as NotesController from "../controller/noteController.js";
//http://localhost:3755/api/notes/?userId=6620f077766483d2c68ddbce
router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

router.post("/", NotesController.createNote);

// router.patch("/:noteId", NotesController.updateNote);

// router.delete("/:noteId", NotesController.deleteNote);

export default router;
