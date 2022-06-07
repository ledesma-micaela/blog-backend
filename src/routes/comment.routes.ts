import express from "express";
import { Comment } from "../model/Comment";
import { Post } from "../model/Post";

const commentRoute = express.Router();

// Add Comment
commentRoute.route('/add-comment').post(async (req, res, next) => {
  Comment.create(req.body, async (error, data) => {
    if (error) {
      return next(error);
    } else {
      await Post.findOneAndUpdate(req.body.post, { $push: { comment: data } });
      console.log("Comment was added successfully");
      res.json(data);
    }
  });
});

// Get all comments
commentRoute.route('/post-comments/:post').get((req, res, next) => {
  Comment.find({ post: req.params.post }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

export = commentRoute;
