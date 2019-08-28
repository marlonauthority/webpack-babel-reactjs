import React from "react";
import Comments from "./Comments";

function Post({ post }) {
  return (
    <div className="post" key={post.id}>
      <div className="post-header">
        <img className="avatar" src={post.author.avatar} alt="Author" />
        <div className="details">
          <span>{post.author.name}</span>
          <span>{post.date}</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <Comments post={post} key={post.comments.id} />
    </div>
  );
}
export default Post;
