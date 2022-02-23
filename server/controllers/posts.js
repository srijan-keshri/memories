import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPost = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();
    console.log(PostMessages);

    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const Post = req.body;
  const newPost = new PostMessage(Post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  console.log("I am in the updatePost");
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.parms;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "post deleted sucessfully" });
};
