import { Comment } from "../models/Comment.model.js";

const commentController = {
  addComment: async (req, res) => {
    try {
      const addComment = await Comment.create({
        text: req.body.text,
        user: req.body.user,
        twitt: req.body.twitt,
      });
      return res.json(addComment);
    } catch (error) {
      console.log(error.message);
    }
  },

  updateComment: async (req, res) => {
    try {
      const updateComment = await Comment.findByIdAndUpdate(
        req.param.id,
        req.body
      );
      return res.json(updateComment);
    } catch (error) {
      console.log(error.message);
    }
  },

  deletedComment: async (req, res) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.id);
      return res.json(deletedComment);
    } catch (error) {
      console.log(error.message);
    }
  },

  getComment: async (req, res) => {
    try {
      const getComment = await Comment.find({})
        .populate({ path: "user", select: "name _id" })
        .populate({ path: "twitt", select: "text _id" });
      return res.json(getComment);
    } catch (error) {
      console.log(error.message);
    }
  },

  getCommentsByUser: async (req, res) => {
    try {
      const getUserByComment = await Comment.findById(req.params.id);
      return res.json(getUserByComment);
    } catch (error) {
      console.log(error.message);
    }
  },

    getCommentsByTwitt: async (req, res) => {
    try {
      const getUserByComment = await Comment.findById(req.params.id);
      return res.json(getUserByComment);
    } catch (error) {
      console.log(error.message);
    }
  },
};


export{commentController}