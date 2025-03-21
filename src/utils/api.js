import axios from 'axios';

const API_URL = 'http://localhost:3000';

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

export const postTweet = async (tweet) => {
    const token = localStorage.getItem('authToken');
    return await axios.post('http://localhost:3000/tweets/user/{userId}', tweet, {
        headers: {
            Authorization: `Basic ${token}`
        }
    });
};

export const fetchTweets = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        throw new Error("No auth token found");
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
        const token = localStorage.getItem('authToken');
        console.log("API'ye gönderilen tweet verisi:", newTweet);
        const response = await axios.post(`${API_URL}/tweet/user`, newTweet, {
            headers: {
                Authorization: `Basic ${authToken}`,
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