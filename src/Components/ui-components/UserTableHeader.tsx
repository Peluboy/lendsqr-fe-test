import React from 'react';
import classes from '../../Containers/UserDashboardTable/UserDashboardTable.module.scss';
import filterIcon from '../../Assets/Icons/filterIcon.svg';
import { USER_DASHBOARD_TABLE_HEADER } from '../../Constants/constants';

interface UserTableHeaderProps {
  onFilterClick: () => void;
}

const UserTableHeader: React.FC<UserTableHeaderProps> = ({ onFilterClick }) => (
  <div className={classes.userDashboardTableHeader}>
    {USER_DASHBOARD_TABLE_HEADER.map(header => (
      <div
        className={classes.userDashboardTableHeaderItem}
        key={header}
        onClick={onFilterClick}
      >
        <div>{header}</div>
        <img src={filterIcon} alt="Filter" className={classes.filterIcon} />
      </div>
    ))}
  </div>
);

export default UserTableHeader;
