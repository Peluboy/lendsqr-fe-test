import React, { useState, useRef, useContext, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import classes from './UserDashboardTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../Context/AppContext';
import { activeToggler } from '../../HelperFunctions/ActiveToggler';
import { CircularProgress } from '@mui/material';
import { formatDate } from '../../Utilities/utils';
import { USER_STATUS_STYLES } from '../../Constants/constants';
import UserPopUpMenu from '../../Components/ui-components/UserPopUpMenu';
import UserTableHeader from '../../Components/ui-components/UserTableHeader';
import TableFilterModal from '../UserDashboardTableFilter/UserDashboardTableFilter';
import { AppContextValues } from '../../Utilities/types';

const UserDashboardTable = ({ onViewDetails }: { onViewDetails: (id: number) => void }) => {
  const { users, setUsers, isSendingRequest } = useContext(AppContext) as AppContextValues;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const popUpRef = useRef<HTMLDivElement>(null!);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Effects
  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (!popUpRef?.current?.contains(e.target as Node)) {
        const modifiedUsers = users.map((user) => {
          return { ...user, isActive: false };
        });
        setUsers(modifiedUsers);
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
  }, [popUpRef, users, setUsers]);

  const userStatusHandler = (index: number, status: string) => {
    setUsers(users.map((user, i) => (i === index ? { ...user, status } : user)));
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleFilter = (filters: any) => {
    // Implement the filtering logic
    console.log(filters);
  };

  return (
    <div className={classes.outerContainer}>
      <Card>
        <div className={classes.container}>
          <UserTableHeader onFilterClick={handleFilterClick} />
          <div className={classes.userDashboardTableBody}>
            {isSendingRequest && users.length < 1 ? (
              <div className={classes.loading}>
                <CircularProgress size="1rem" color="inherit" style={{ color: "#39CDCC" }} />
              </div>
            ) : (
              currentUsers.map((user, index) => {
                const globalIndex = indexOfFirstUser + index;
                return (
                  <div className={classes.userDashBoardTableBodyItemOuter} key={user.id}>
                    <div className={classes.userDashboardTableBodyItem}>
                      <div>{user?.orgName}</div>
                      <div onClick={() => onViewDetails(user.id)}>{user.userName}</div>
                      <div onClick={() => onViewDetails(user.id)}>{user.email}</div>
                      <div onClick={() => onViewDetails(user.id)}>{user.phoneNumber}</div>
                      <div>{formatDate(user.createdAt)}</div>
                      <div>
                        <span style={USER_STATUS_STYLES[user.status]}>
                          {user.status}
                        </span>
                        <span onClick={() => activeToggler(globalIndex, users, setUsers)}>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </span>
                      </div>
                    </div>
                    {user.isActive && (
                      <div ref={popUpRef}>
                        <UserPopUpMenu
                          onViewDetails={() => onViewDetails(user.id)}
                          onBlacklistUser={() => userStatusHandler(globalIndex, 'Blacklisted')}
                          onActivateUser={() => userStatusHandler(globalIndex, 'Active')}
                        />
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Card>
      <div className={classes.pagination}>
        <span>
          Showing {indexOfFirstUser + 1} out of {users.length}
        </span>
        <div className={classes.pageButtons}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? classes.activePage : ""}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      {isFilterModalOpen && (
        <TableFilterModal
          onClose={() => setIsFilterModalOpen(false)}
          onFilter={handleFilter}
        />
      )}
    </div>
  );
};

export default UserDashboardTable;
