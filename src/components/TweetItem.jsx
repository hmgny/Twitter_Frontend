import React, { useState, useMemo } from "react";
import { Heart, Repeat, MessageSquare, Edit, Trash2 } from "lucide-react";
import { deleteTweet, updateTweet } from "../utils/api";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const TweetItem = ({ tweet, userId, onDelete, onUpdate, isProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(tweet?.tweetText || "");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(tweet?.likeCount || 0);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetCount, setRetweetCount] = useState(tweet?.retweetCount || 0);

  const handleDelete = async () => {
    try {
      await deleteTweet(tweet.id);
      onDelete(tweet.id);
    } catch (error) {
      console.error("Error deleting tweet:", error);
      alert("Failed to delete tweet.");
    }
  };

  const handleUpdate = async () => {
    try {
      await updateTweet(tweet.id, editText);
      onUpdate(tweet.id, editText);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating tweet:", error);
      alert("Failed to update tweet.");
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    console.log("Like clicked for tweet:", tweet.id);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetCount(isRetweeted ? retweetCount - 1 : retweetCount + 1);
    console.log("Retweet clicked for tweet:", tweet.id);
  };

  const handleComment = () => {
    console.log("Comment clicked for tweet:", tweet.id);
  };

  const getTweetImageUrl = () => {
    return `https://picsum.photos/200/300?random=${Math.random()}`;
  };

  const tweetImageUrl = useMemo(() => getTweetImageUrl(), []);

  return (
    <div className="tweet">
      <Link to={`/profile/${tweet.userId}`} className="tweet-form-header">
        <Avatar alt={tweet.username} src="/img/default-avatar.png" />
        <p className="username">{tweet.username}</p>
      </Link>
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{tweet.tweetText}</p>
      )}
      <img className="tweet_img" src={tweetImageUrl} alt="Random Tweet Image" />
      {tweet.media && (
        <img className="tweet_img" src={tweet.media} alt="tweet_img" />
      )}
      <div className="button-tweets">
        <button
          className={`button-tweet ${isLiked ? "active" : ""}`}
          onClick={handleLike}
        >
          <Heart color={isLiked ? "red" : "currentColor"} />
          {likeCount > 0 && <span>{likeCount}</span>}
        </button>
        <button
          className={`button-tweet ${isRetweeted ? "active" : ""}`}
          onClick={handleRetweet}
        >
          <Repeat color={isRetweeted ? "green" : "currentColor"} />
          {retweetCount > 0 && <span>{retweetCount}</span>}
        </button>
        <button className="button-tweet" onClick={handleComment}>
          <MessageSquare />
        </button>
        {isProfile && tweet.user?.id === userId && (
          <>
            {isEditing ? (
              <button className="button-tweet" onClick={handleUpdate}>
                Save
              </button>
            ) : (
              <button
                className="button-tweet"
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </button>
            )}
            <button className="button-tweet" onClick={handleDelete}>
              <Trash2 />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TweetItem;
