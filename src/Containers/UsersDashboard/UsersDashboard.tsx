import React, { useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../Components/Layout/Layout';
import UserDashboardTable from '../UserDashboardTable/UserDashboardTable';
import UsersDashboardSummary from '../UsersDashboardSummary/UsersDashboardSummary';
import UserDetails from '../UserDetails.tsx/index';
import classes from './UsersDashboard.module.scss';
import { AppContext } from '../../Context/AppContext';
import { AppContextValues } from '../../Utilities/types';

const UsersDashboard = () => {
  const [viewingUserDetails, setViewingUserDetails] = useState<boolean>(false);
  const { getUserDetails, users, setUsers } = useContext(AppContext) as AppContextValues;
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);

  const handleViewDetails = (id: number) => {
    getUserDetails(id);
    setViewingUserDetails(true);
    const index = users.findIndex(user => user.id === id);
    setSelectedUserIndex(index);
  };

  const handleBack = () => {
    setViewingUserDetails(false);
    setSelectedUserIndex(null);
  };

  const handleUpdateStatus = (status: string) => {
    if (selectedUserIndex !== null) {
      setUsers(users.map((user, index) => index === selectedUserIndex ? { ...user, status } : user));
      toast.success(`User has been ${status === 'Active' ? 'Activated' : 'Blacklisted'} successfully!`);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <section className={classes.container}>
        {viewingUserDetails ? (
          <UserDetails onBack={handleBack} onUpdateStatus={handleUpdateStatus} />
        ) : (
          <>
            <div className={classes.header}>Users</div>
            <div className={classes.usersSummary}>
              <UsersDashboardSummary />
            </div>
            <div className={classes.userDashboardTable}>
              <UserDashboardTable onViewDetails={handleViewDetails} />
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default UsersDashboard;
