import React from 'react';
import classes from './UserDashboardTableFilter.module.css';
import { TableFilterModalProps } from '../../Utilities/types';

const TableFilterModal: React.FC<TableFilterModalProps> = ({ onClose, onFilter }) => {
  const handleFilter = () => {
    const filters = {}; 
    onFilter(filters);
    onClose();
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.tableFilterModal}>
        <div className={classes.modalBody}>
          <div>
            <label>Organization</label>
            <input type="text" />
          </div>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone number</label>
            <input type="text" />
          </div>
          <div>
            <label>Date joined</label>
            <input type="date" />
          </div>
          <div>
            <label>Status</label>
            <input type="text" />
          </div>
        </div>
        <div className={classes.modalFooter}>
          <button onClick={handleFilter}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
};

export default TableFilterModal;
