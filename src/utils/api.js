import axios from 'axios';

const API_URL = 'http://localhost:3000';
const token = localStorage.getItem('authToken');

export const login = async (credentials) => {
    const { username, password } = credentials;

    try {
        const response = await axios.post(`${API_URL}/user/login`, { username, password });
        return response;
    } catch (error) {
        console.error("Login API Error:", error);
        throw error;
    }
};


export const register = async (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};


export const fetchTweets = async (userId) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        throw new Error("No auth token found");
    }

    let url = `${API_URL}/tweet`;
    if (userId) {
        url = `${API_URL}/tweet/user/${userId}`;
    }

    return axios.get(`http://localhost:3000/tweet`, {
        headers: {
            'Authorization': `Basic ${token}` 
        }
    });
};

export const getAllTweets = async () => {
    try {
        const response = await axios.get(`${API_URL}/tweet`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createTweet = async (newTweet) => {
  try {
    const token = localStorage.getItem('authToken'); // authToken'i localStorage'dan al
    console.log("API'ye gönderilen tweet verisi:", newTweet);
    const response = await axios.post(`${API_URL}/tweet/user`, newTweet, {
      headers: {
        Authorization: `Basic ${token}`, // token'i kullan
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTweet = async (tweetId) => {
    try {
        await axios.delete(`${API_URL}/tweet/user/${tweetId}`);
    } catch (error) {
        throw error;
    }
};

export const updateTweet = async (tweetId, tweetText) => {
    try {
        await axios.put(`${API_URL}/tweet/user/${tweetId}`, {
            tweetText: tweetText,
        });
    } catch (error) {
        throw error;
    }
};

export const likeTweet = async (userId, tweetId) => {
    return axios.post(`${API_URL}/like`, null, {
      params: {
        userId: userId,
        tweetId: tweetId,
      },
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
  };
  
  export const dislikeTweet = async (userId, tweetId) => {
    return axios.post(`${API_URL}/dislike/${tweetId}`, null, {
      params: {
        userId: userId,
      },
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
  };