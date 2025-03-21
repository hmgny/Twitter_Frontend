import React, { useState, useEffect } from "react";
import { fetchTweets } from "../utils/api";
import TweetItem from "./TweetItem";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 1;

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await fetchTweets();
        console.log("Fetched Tweets:", response.data);
        setTweets(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tweets:", error);
        setError(error);
        setLoading(false);
      }
    };

    getTweets();
  }, []);

  const handleNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = async () => {
    console.log("Like clicked");
  };

  const handleRetweet = async () => {
    console.log("Retweet clicked");
  };

  const handleComment = async () => {
    console.log("Comment clicked");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem
          key={tweet.id}
          tweet={tweet}
          username={tweet.username}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default TweetList;
