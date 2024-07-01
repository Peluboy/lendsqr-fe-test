import { useState, useRef, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Card from '../../Components/ui-components/Card/Card';
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
import Pagination from '../../Components/Pagination';

const UserDashboardTable = ({ onViewDetails }: { onViewDetails: (id: number) => void }) => {
  const { users, setUsers, isSendingRequest } = useContext(AppContext) as AppContextValues;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const popUpRef = useRef<HTMLDivElement>(null!);
  const filterModalRef = useRef<HTMLDivElement>(null!);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (!popUpRef?.current?.contains(e.target as Node)) {
        const modifiedUsers = users.map((user) => ({ ...user, isActive: false }));
        setUsers(modifiedUsers);
      }
      if (isFilterModalOpen && !filterModalRef?.current?.contains(e.target as Node)) {
        setIsFilterModalOpen(false);
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
  }, [popUpRef, filterModalRef, users, setUsers, isFilterModalOpen]);

  const userStatusHandler = (index: number, status: string) => {
    setUsers(users.map((user, i) => (i === index ? { ...user, status } : user)));
    toast.success(`User has been ${status === 'Active' ? 'activated' : 'blacklisted'} successfully!`);
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleFilter = (filters: any) => {
    const newFilteredUsers = users.filter(user => {
      return (
        (!filters.organization || user.orgName.includes(filters.organization)) &&
        (!filters.username || user.fullName.includes(filters.username)) &&
        (!filters.email || user.office.email.includes(filters.email)) &&
        (!filters.phoneNumber || user.phoneNumber.includes(filters.phoneNumber)) &&
        (!filters.dateJoined || formatDate(user.createdAt) === filters.dateJoined) &&
        (!filters.status || user.status.includes(filters.status))
      );
    });
    setFilteredUsers(newFilteredUsers);
  };

  return (
    <div className={classes.outerContainer}>
      <Card>
        <div className={classes.container}>
          <UserTableHeader onFilterClick={handleFilterClick} />
          <div className={classes.userDashboardTableBody}>
            {isSendingRequest ? (
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
                      <div onClick={() => onViewDetails(user.id)}>{user.fullName}</div>
                      <div onClick={() => onViewDetails(user.id)}>{user.office.email}</div>
                      <div>{user.phoneNumber}</div>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      {isFilterModalOpen && (
        <div ref={filterModalRef}>
          <TableFilterModal
            onClose={() => setIsFilterModalOpen(false)}
            onFilter={handleFilter}
          />
        </div>
      )}
    </div>
  );
};

export default UserDashboardTable;
