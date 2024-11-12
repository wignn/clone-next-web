"use server"

import axios from "axios";
import { API_URL } from "@/constant/Network";



export const GetUser = async (query: string, token: string) => {
    const response = await axios.get(`${API_URL.url}/users/${query}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
