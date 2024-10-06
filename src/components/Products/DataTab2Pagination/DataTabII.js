import { useState } from 'react';
import users from './data/users.json';

export default function DataTable() {
    const [pageNumber, setPageNumber] = useState(1);
    const [filterPage, setFilterPage] = useState(5);
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / filterPage);
  
    // Ensure the page number is within valid boundaries
    const handlePrev = () => {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    };
  
    const handleNext = () => {
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
    };
  
    const handlePageClick = (page) => {
      setPageNumber(page);
    };
  
    return (
      <div>
        <h1>Data Table</h1>
        <table>
          <thead>
            <tr>
              {[
                { label: 'ID', key: 'id' },
                { label: 'Name', key: 'name' },
                { label: 'Age', key: 'age' },
                { label: 'Occupation', key: 'occupation' },
              ].map(({ label, key }) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            // Another logic 
          // {users.slice(pageNumber * filterPage - filterPage, pageNumber * filterPage)}

            {users
              .slice((pageNumber - 1) * filterPage, pageNumber * filterPage)
              .map(({ id, name, age, occupation }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{occupation}</td>
                </tr>
              ))}
          </tbody>
        </table>
  
        {/* Pagination Controls */}
        {users.length > 0 && (
          <div>
            {/* Page size dropdown */}
            <select
              value={filterPage}
              onChange={(e) => {
                setFilterPage(Number(e.target.value));
                setPageNumber(1); // Reset to the first page on filter change
              }}
            >
              <option value={5}>Show 5</option>
              <option value={10}>Show 10</option>
              <option value={20}>Show 20</option>
            </select>
  
            {/* Pagination */}
            <div>
              <button onClick={handlePrev} disabled={pageNumber === 1}>
                Prev
              </button>
  
              {/* Page 1 of totalPages */}
              <span>
                Page {pageNumber} of {totalPages}
              </span>
  
              <button onClick={handleNext} disabled={pageNumber === totalPages}>
                Next
              </button>
            </div>
  
            {/* Display page numbers */}
            <div>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(idx + 1)}
                  style={{
                    fontWeight: pageNumber === idx + 1 ? 'bold' : 'normal',
                  }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }