import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },

    text: { type: String, required: true },

    stati: {
      type: String,

      enum: ["aktiv", "progress", "done"],
      default: "aktiv",
    },
  },
  { timestamps: true }
);

const NoteModel = mongoose.model("Note", noteSchema);

export default NoteModel;
