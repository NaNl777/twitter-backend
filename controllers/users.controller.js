import { User } from "../models/User.model.js";

const userController = {
  addUser: async (req, res) => {
    try {
      const addUser = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        saved: req.body.saved,
      });
      return res.json(addUser);
    } catch (error) {
      console.log(error.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {  $push: { saved: req.body.saved },});
      return res.json(updateUser);
    } catch (error) {
      console.log(error.message)
    }
 },
   
 deletedUser: async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res.json(deletedUser)
    } catch (error) {
        console.log(error.message)
    }
 }, 

  getUser: async(req, res) => {
    try {
        const getUser = await User.find({}).populate({path: 'saved', select: 'text _id'})
        return res.json(getUser)
    } catch (error) {
        console.log(error.message)
    }
  }
};

export{userController}