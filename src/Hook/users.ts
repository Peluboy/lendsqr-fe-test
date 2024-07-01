import { useEffect, useState } from 'react';
import axios from "axios";
import { User } from '../Utilities/types';

// API function to fetch users
const API_KEY = "eb1ec020";
const BASE_URL = "https://api.mockaroo.com/api/82a4a390";

// Fetch 500 users
const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}?count=500&key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Custom hook to use users
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [organizations, setOrganizations] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  // Fetch all users initially
  useEffect(() => {
    const getUsers = async () => {
      setIsSendingRequest(true);
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        const orgs = [
          "Lendstar",
          "Lendsqr",
          "Irorun",
          "Kredi",
          "Urgent10k",
          "Blockacash",
          "Snapcash",
          "A1Credit",
        ];
        setOrganizations(orgs);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsSendingRequest(false);
      }
    };

    getUsers();
  }, []);

  // Function to fetch user details by ID
  const getUserDetails = async (id: number) => {
    setIsSendingRequest(true);
    try {
      const userDetails = users.find(user => user.id === id);
      if (!userDetails) {
        throw new Error(`User with ID ${id} not found`);
      }
      setSelectedUser(userDetails);
      console.log(`Fetched user details: `, userDetails);
    } catch (error) {
      console.error(`Error fetching user details for ID ${id}:`, error);
    } finally {
      setIsSendingRequest(false);
    }
  };

  return {
    users,
    setUsers,
    isSendingRequest,
    selectedUser,
    getUserDetails,
    organizations,
  };
};

export default useUsers;
