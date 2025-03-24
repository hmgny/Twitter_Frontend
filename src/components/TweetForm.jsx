import React, { useState, useEffect } from "react";
import { createTweet } from "../utils/api";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TweetForm = ({ onTweetCreated }) => {
  const [tweetText, setTweetText] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleTweetSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Kullanıcı ID'si bulunamadı. Lütfen giriş yapın.");
      return;
    }

    if (isNaN(userId)) {
      alert("Geçersiz kullanıcı ID'si.");
      return;
    }
    try {
      const newTweet = {
        userId: userId,
        tweetText: tweetText,
      };
      const response = await createTweet(newTweet);
      setTweetText("");
      onTweetCreated(response.data);
      toast.success("Tweet başarıyla oluşturuldu!");
    } catch (error) {
      toast.error("Tweet oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className="tweet-form">
      <Link to="/profile" className="tweet-form-header">
        <Avatar alt={username} src="/img/default-avatar.png" />
        <p className="username">{username}</p>
      </Link>
      <textarea
        placeholder="Neler Oluyor?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <button
        type="submit"
        className="button-gonderi"
        onClick={handleTweetSubmit}
      >
        Gönderi Yayınla
      </button>
    </div>
  );
};

export default TweetForm;
