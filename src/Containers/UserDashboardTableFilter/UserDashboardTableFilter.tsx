import React, { useState } from 'react';
import classes from './UserDashboardTableFilter.module.scss';
import { TableFilterModalProps } from '../../Utilities/types';
import FormInput from '../../Components/ui-components/Input/FormInput';
import Dropdown from '../../Components/ui-components/Dropdown/Dropdown';
import useUsers from '../../Hook/users';

const TableFilterModal: React.FC<TableFilterModalProps> = ({ onClose, onFilter }) => {
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: '',
    status: '',
  });

  const { organizations } = useUsers();
  const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    onFilter(filters);
    onClose();
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.tableFilterModal}>
        <div className={classes.modalBody}>
          <div>
            <label>Organization</label>
            <Dropdown
              options={organizations}
              selected={filters.organization}
              setSelected={(value) => setFilters({ ...filters, organization: value })}
              title="Select"
            />
          </div>
          <div>
            <label>Username</label>
            <FormInput placeholder="User" value={filters.username} onChange={handleInputChange} type="text" name="username" id="username" />
          </div>
          <div>
            <label>Email</label>
            <FormInput placeholder="Email" value={filters.email} onChange={handleInputChange} type="text" name="email" id="email" />
          </div>
          <div>
            <label>Date joined</label>
            <FormInput placeholder="Date" value={filters.dateJoined} onChange={handleInputChange} type="date" name="dateJoined" id="dateJoined" />
          </div>
          <div>
            <label>Phone number</label>
            <FormInput placeholder="Phone Number" value={filters.phoneNumber} onChange={handleInputChange} type="text" name="phoneNumber" id="phoneNumber" />
          </div>
         
          <div>
            <label>Status</label>
            <Dropdown
              options={statusOptions}
              selected={filters.status}
              setSelected={(value) => setFilters({ ...filters, status: value })}
              title="Select"
            />
          </div>
        </div>
        <div className={classes.modalFooter}>
          <button onClick={handleFilter}>Reset</button>
          <button onClick={handleFilter}>Filters</button>
        </div>
      </div>
    </div>
  );
};

export default TableFilterModal;
