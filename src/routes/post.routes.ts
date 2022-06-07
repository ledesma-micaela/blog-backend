import express from "express";
import { Post } from "../model/Post";

const postRoute = express.Router();

// Add Post
postRoute.route('/add-post').post((req, res, next) => {
    Post.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all posts
postRoute.route('/').get((req, res, next) => {
    Post.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Post
postRoute.route('/read-post/:id').get((req, res, next) => {
    Post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Post
postRoute.route('/update-post/:id').put((req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Post updated successfully!');
    }
  });
});

// Delete Post
postRoute.route('/delete-post/:id').delete((req, res, next) => {
    Post.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

export = postRoute;
