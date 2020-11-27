import React, { useState, useEffect } from "react";
import "./post.css";
import { db } from '../../firebase'
import { Avatar } from "@material-ui/core";


const Post = ({ postId, username, caption, imageUrl }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('')
  console.log(imageUrl);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
        unsubscribe()
    }
  }, [postId]);

  function postComment(){

  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="react pic" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      <form className='post__commentBox'>
        <input 
            type="text"
            className='post_input'
            placeholder='Add a comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
            <button
                className='post__button'
                disabled={!comment}
                onClick={postComment}
                type='submit'
            >
                Post
            </button>
      </form>
    </div>
  );
};

export default Post;
