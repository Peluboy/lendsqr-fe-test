import React from 'react';
import classes from './Pagination.module.scss';
import prevIcon from "../../Assets/Icons/prev.svg"
import nextIcon from "../../Assets/Icons/next.svg"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
  onItemsPerPageChange,
}) => {
  const pageNumbers = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, 5, '...', totalPages);
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    } else {
      pageNumbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(event.target.value));
  };

  return (
    <div className={classes.pagination}>
    <div>
      <div className={classes.itemsPerPageDropdown}>
        <span>Showing</span>
        <select onChange={handleItemsPerPageChange} value={itemsPerPage} className={classes.numberDropdown}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {totalItems}</span>
      </div>
      </div>
      <div className={classes.pageNumbers}>      
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <img src={prevIcon} alt="prev-icon" />
        </button>
        {pageNumbers.map((number, index) =>
            number === '...' ? (
            <span key={index} className={classes.ellipsis}>
                ...
            </span>
            ) : (
            <button
                key={index}
                onClick={() => onPageChange(number as number)}
                className={currentPage === number ? classes.activePage : ''}
            >
                {number}
            </button>
            )
        )}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <img src={nextIcon} alt="next-icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
