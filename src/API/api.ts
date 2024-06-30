import axios from "axios";
import { User } from "../Utilities/types";

const API_KEY = "eb1ec020";
const BASE_URL = "https://api.mockaroo.com/api/82a4a390";
// https://api.mockaroo.com/api/82a4a390?count=500&key=eb1ec020

// Fetch 500 users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}?count=500&key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};