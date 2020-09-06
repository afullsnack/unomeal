import mongoose, { model } from "mongoose";
let Note;
try {
  const NoteSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Please add the title"] },
  });
  Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
} catch (err) {
  console.log(err.message || err.toString());
}

export default Note;
