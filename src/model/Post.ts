import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  comment:[
    {
      type: Schema.Types.ObjectId,
      ref:'Comment'
    }
]
}, {
  collection: 'post'
});

export const Post = mongoose.model('Post', postSchema);
