import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserXmark, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import classes from '../../Containers/UserDashboardTable/UserDashboardTable.module.scss';

interface UserPopUpMenuProps {
  onViewDetails: () => void;
  onBlacklistUser: () => void;
  onActivateUser: () => void;
}

const UserPopUpMenu: React.FC<UserPopUpMenuProps> = ({ onViewDetails, onBlacklistUser, onActivateUser }) => (
  <div className={classes.userPopUpMenu}>
    <div onClick={onViewDetails}>
      <span>
        <FontAwesomeIcon icon={faEye} />
      </span>
      <span>View Details</span>
    </div>
    <div onClick={onBlacklistUser}>
      <span>
        <FontAwesomeIcon icon={faUserXmark} />
      </span>
      <span>Blacklist User</span>
    </div>
    <div onClick={onActivateUser}>
      <span>
        <FontAwesomeIcon icon={faUserCheck} />
      </span>
      <span>Activate User</span>
    </div>
  </div>
);

export default UserPopUpMenu;
