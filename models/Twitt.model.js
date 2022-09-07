import mongoose from "mongoose";

const twittSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  text: {
    type: String,
    required: true,
  },

  likes: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Twitt = mongoose.model("Twitt", twittSchema);

export { Twitt };
