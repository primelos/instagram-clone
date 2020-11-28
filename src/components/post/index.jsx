import React, { useState, useEffect } from "react";
import "./post.css";
import { db } from '../../firebase'
import { Avatar } from "@material-ui/core";
import firebase from 'firebase'

const Post = ({ postId, user,username, caption, imageUrl }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('')
  console.log(imageUrl);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("post")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
        unsubscribe()
    }
  }, [postId]);

  function postComment(e){
    e.preventDefault()
    db.collection('post').doc(postId).collection('comments').add({
        text: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setComment('')
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt='added by user'
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="react pic" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>

        <div className="post__comments">
            {comments.map((comment) => (
                <p>
                    <strong>{comment.username}</strong> {comment.text}
                </p>
            ))}
        </div>
      { user && (
        <form className='post__commentBox'>
            <input 
                type="text"
                className='post__input'
                placeholder='Add a comment...'
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

      )}
    </div>
  );
};

export default Post;
