import axios from "axios";

const url = "http://localhost:5001/post";

export const fetchPosts = () => axios.get(url);
