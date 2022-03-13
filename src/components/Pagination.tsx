import React from 'react';
import _ from 'lodash';

const Pagination = ({itemsCount, pageSize, onPageChane, currentPage}: {itemsCount: number, pageSize: number, onPageChane: (page: number)=> void, currentPage: number}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  return (
    <div style={{textAlign: 'center'}}>
      <div className="pagination">
        {pages.map((page) => (
          <a key={page} onClick={()=> onPageChane(page)} className={page === currentPage ? 'active' : ''}>{page}</a>
        ))}
      </div>
    </div>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChane: PropTypes.func.isRequired,
// }


export default Pagination;
