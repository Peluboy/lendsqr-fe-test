import { useState, useEffect } from "react";
import { fetchUsers, fetchUserDetails } from "../Api/api";
import { User } from "../Utilities/types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isSendingRequest, setIsSendingRequest] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    setIsSendingRequest(true);
    fetchUsers()
      .then(data => {
        setUsers(data);
        setIsSendingRequest(false);
      })
      .catch(err => {
        console.error(err);
        setIsSendingRequest(false);
      });
  }, []);

  const getUserDetails = (id: number) => {
    setIsSendingRequest(true);
    fetchUserDetails(id)
      .then(data => {
        setSelectedUser(data);
        setIsSendingRequest(false);
      })
      .catch(err => {
        console.error(err);
        setIsSendingRequest(false);
      });
  };

  return {
    users,
    setUsers, // Ensure setUsers is returned here
    isSendingRequest,
    selectedUser,
    getUserDetails
  };
};
