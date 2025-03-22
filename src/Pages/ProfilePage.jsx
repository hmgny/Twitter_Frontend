import React, { useState, useEffect, useCallback, useMemo } from "react";
import { fetchTweets } from "../utils/api";
import TweetItem from "../components/TweetItem";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import TweetForm from "../components/TweetForm";
import { getLoggedInUserId } from "../utils/auth";

const ProfilePage = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams(); // Get userId from URL
  const username = localStorage.getItem("username");

  const getTweets = useCallback(async () => {
    try {
      const response = await fetchTweets();
      console.log("Fetched Tweets:", response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error fetching tweets:", error);
      setError(error);
      setLoading(false);
      return [];
    }
  }, []);

  const userTweets = useMemo(() => {
    return tweets.filter((tweet) => tweet.userId === parseInt(userId, 10));
  }, [tweets, userId]);

  const handleNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getTweets();
      setTweets(data);
      setLoading(false);
    };

    fetchData();
  }, [getTweets, userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loggedInUserId = getLoggedInUserId();
  console.log("userId:", userId);
  console.log("loggedInUserId:", loggedInUserId);
  const isOwnProfile =
    loggedInUserId !== null && String(userId) === loggedInUserId;

  return (
    <Layout>
      <div className="profile-page">
        {isOwnProfile && (
          <TweetForm onTweetCreated={handleNewTweet} userId={userId} />
        )}
        <div className="profile-tweets">
          {userTweets.map((tweet) => (
            <TweetItem key={tweet.id} tweet={tweet} userId={userId} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
