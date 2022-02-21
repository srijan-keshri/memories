import { combineReducers } from "redux";
import { deflate } from "zlib";
import posts from "./posts";
export default combineReducers({
  posts,
});
