import { Twitt } from "../models/Twitt.model.js";

const twittController = {
    addTwitt: async(req, res) => {
       try {
         const addTwitt = await Twitt.create({
           text: req.body.text,
           user: req.body.user,
           likes: req.body.likes,
         });
         return res.json(addTwitt)
       } catch (error) {
        console.log(error.message)
       }
    },

    deletedTwitt: async(req, res) => {
        try {
            const deletedTwitt = await Twitt.findByIdAndDelete(req.params.id)
            return res.json(deletedTwitt)
        } catch (error) {
            console.log(error.message)
        }
    },

     updateTwitt: async(req, res) => {
        try {
            const updateTwitt = await Twitt.findByIdAndUpdate(req.param.id, {$push: {likes: req.body.likes}})
            return res.json(updateTwitt)
        } catch (error) {
            console.log(error.message)
        }
     },

     getTwitt: async(req, res) => {
        try {
            const getTwitt = await Twitt.find({}).populate({path: 'user', select: 'name _id'}).populate({path: 'likes', select: 'name _id'})
            return res.json(getTwitt)
        } catch (error) {
            console.log(error.message)
        }
     },

     getTwittByUser: async(req, res) => {
        try {
            const getTwittByUser = await Twitt.find(req.params.id);
            return res.json(getTwittByUser)
        } catch (error) {
            console.log(error.message)
        }
     } 
}

export{twittController}