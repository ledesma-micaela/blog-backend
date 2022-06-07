import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
}, {
  collection: 'post'
});

export const Post = mongoose.model('Post', postSchema);
