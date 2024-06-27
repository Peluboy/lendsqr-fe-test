import { useEffect, useState } from 'react';
import { fetchUsers } from '../Api/api'; // Import your API functions
import { User } from '../Utilities/types';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]); // Assuming User type is defined
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  // Fetch all users initially
  useEffect(() => {
    const getUsers = async () => {
      setIsSendingRequest(true);
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
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
  };
};

export default useUsers;
