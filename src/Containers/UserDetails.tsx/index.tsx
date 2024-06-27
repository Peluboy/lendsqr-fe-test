// UserDetails.tsx

import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import classes from './UserDetails.module.scss';

const UserDetails = ({ onBack }: { onBack: () => void }) => {
  const { selectedUser } = useContext(AppContext)!;

  if (!selectedUser) return null;

  return (
    <div className={classes.userDetailsContainer}>
      <button onClick={onBack}>Back</button>
      <div className={classes.userDetails}>
        <h2>{selectedUser.userName}</h2>
        <p>Email: {selectedUser.email}</p>
        <p>Phone Number: {selectedUser.phoneNumber}</p>
        <p>Organization: {selectedUser.orgName}</p>
        <p>Account Balance: {selectedUser.accountBalance}</p>
        <p>Account Number: {selectedUser.accountNumber}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default UserDetails;
