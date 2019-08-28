import React from "react";

function Comments({ post }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {post.comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} alt="Author" />
          <p>
            <span>{comment.author.name}:</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
