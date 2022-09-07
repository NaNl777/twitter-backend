import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  twitt: {
    ref: "Twitt",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export { Comment };
