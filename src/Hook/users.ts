import { useEffect, useState } from 'react';
import { User } from '../Utilities/types';
import { fetchUsers } from '../api/fetchUsers';

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
    organizations, // Add this line to return organizations
  };
};

export default useUsers;
