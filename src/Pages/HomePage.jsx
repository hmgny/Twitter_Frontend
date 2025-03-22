import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";

const HomePage = () => {
  const handleNewTweet = (newTweet) => {
    // Handle the new tweet
  };

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  return (
    <Layout userId={userId}>
      <TweetForm onTweetCreated={handleNewTweet} userId={userId} />
      <TweetList userId={userId} isProfile={true} />
    </Layout>
  );
};

export default HomePage;
