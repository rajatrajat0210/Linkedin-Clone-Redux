import React, { forwardRef, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";

const Post = forwardRef(({ sender, description, message, photoUrl }, ref) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar src={photoUrl}>{sender[0]}</Avatar>
        <div className="postInfo">
          <h2>{sender}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption
          onClick={handleLikeToggle}
          Icon={ThumbUpIcon}
          title="Like"
          color="gray"
          liked={liked}
        />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
