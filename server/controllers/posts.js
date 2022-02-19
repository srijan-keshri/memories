import PostMessage from "../models/postMessage.js";

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
  const newPost = new PostMessage(post);
  try {
      await newPost.save();
      res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
