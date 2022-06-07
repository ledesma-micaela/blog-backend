import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  email: {
    type: String
  },
  body: {
    type: String
  },
  post: {
      type: Schema.Types.ObjectId,
      ref:'Post'
    }
}, {
  collection: 'comment'
});

export const Comment = mongoose.model('Comment', commentSchema);
