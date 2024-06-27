// api.ts
import axios from "axios";
import { User } from "../Utilities/types";

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
  return response.data.map((user: User) => ({
    ...user,
    isActive: false,
    status: "Active"
  }));
};

// Fetch user details by ID
export const fetchUserDetails = async (id: number): Promise<User> => {
  const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
  return response.data;
};
