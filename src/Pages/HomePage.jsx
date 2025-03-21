import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import Layout from "../layout/Layout";

const HomePage = () => {
  const handleNewTweet = (newTweet) => {
    // Handle the new tweet
  };

  return (
    <Layout>
      <TweetForm onTweetCreated={handleNewTweet} />
      <TweetList />
    </Layout>
  );
};

export default HomePage;
