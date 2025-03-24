import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { TwitterContext } from "../contextApi.jsx/TwitterContext";
import Layout from "../layout/Layout";
import { useContext } from "react";

const HomePage = () => {
  const { userId } = useContext(TwitterContext);

  const handleNewTweet = (newTweet) => {
    // Handle the new tweet
  };

  return (
    <Layout userId={userId}>
      <TweetForm onTweetCreated={handleNewTweet} userId={userId} />
      <TweetList userId={userId} isProfile={true} />
    </Layout>
  );
};

export default HomePage;
