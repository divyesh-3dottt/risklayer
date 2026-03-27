import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const googleLogin = async (data: { idToken?: string, accessToken?: string }) => {
    return axios.post(`${API_URL}/api/auth/google-login`, data);
};
