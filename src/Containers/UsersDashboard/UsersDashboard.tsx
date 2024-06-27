import React, { useState, useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import UserDashboardTable from '../UserDashboardTable/UserDashboardTable';
import UsersDashboardSummary from '../UsersDashboardSummary/UsersDashboardSummary';
import UserDetails from '../UserDetails.tsx/index';
import classes from './UsersDashboard.module.scss';
import { AppContext } from '../../Context/AppContext';
import { AppContextValues } from '../../Utilities/types';

const UsersDashboard = () => {
  const [viewingUserDetails, setViewingUserDetails] = useState<boolean>(false);
  const { getUserDetails } = useContext(AppContext) as AppContextValues;

  const handleViewDetails = (id: number) => {
    getUserDetails(id);
    setViewingUserDetails(true);
  };

  const handleBack = () => {
    setViewingUserDetails(false);
  };

  return (
    <Layout>
      <section className={classes.container}>
        {viewingUserDetails ? (
          <UserDetails onBack={handleBack} />
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
