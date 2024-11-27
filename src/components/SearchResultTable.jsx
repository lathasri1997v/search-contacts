import React from 'react'
import SearchResult from './SearchResult';
import "./SearchresultTable.css";

export const SearchResultTable = ({ results, onSelect }) => {
    return (
        <div className="results-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map((contact, index) => (
                <SearchResult key={index} contact={contact} onSelect={onSelect} />
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default SearchResultTable
