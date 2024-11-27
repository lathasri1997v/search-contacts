import { useState } from "react";
import "./App.css";
import { SearchContainer } from "./components/SearchContainer";
import { SearchResultTable } from "./components/SearchResultTable";
import { Pagination } from "./components/Pagination.jsx";
import contacts from "./data/contacts.json";

function App() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchInitiated, setsearchInitiated] = useState(false); // Correct state variable
  const resultsPerPage = 2;

const handleSearch = (filters) => {
  const keyMap = {
    firstName: "first_name",
    lastName: "last_name",
    dob: "dob",
    email: "email",
    phone: "phone",
    streetAddress: "streetAddress",
    city: "city",
    state: "state",
    zipCode: "zipCode",
  };

  // Checking if all input fields are empty
  const checkFieldEmpty = Object.values(filters).every(
    (value) => !value || value.trim() === ""
  );

  // Then if  all fields are empty
  if (checkFieldEmpty) {
    setResults([]); // Clear previous results
    setsearchInitiated(true);
    return;
  }

  // Checking if 'lastName' is empty but other fields are filled
  if (!filters.lastName || filters.lastName.trim() === "") {
    // Check if any other field is filled
    const otherFieldsFilled = Object.keys(filters).some(
      (key) =>
        key !== "lastName" &&
        filters[key] &&
        filters[key].toString().trim() !== ""
    );

    if (otherFieldsFilled) {
      alert("Please enter the Last Name");
      setResults([]);
      setsearchInitiated(false);
      return;
    }
  }

  // Filtering contacts
  const filteredContacts = contacts.filter((contact) =>
    Object.keys(filters).every((key) => {
      const contactKey = keyMap[key];
      const filterValue = filters[key]?.toString().toLowerCase().trim();
      const contactValue = contact[contactKey]?.toString().toLowerCase().trim();
      return !filterValue || (contactValue && contactValue.includes(filterValue));
    })
  );

  setResults(filteredContacts);
  setsearchInitiated(true);
};

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <h1>Search for a Contact</h1>
        <SearchContainer onSearch={handleSearch} />
        {searchInitiated && results.length === 0 && (
          <div className="no-results-message">
            No contacts found.
          </div>
        )}
        {searchInitiated && results.length > 0 && (
          <>
            <SearchResultTable
              results={currentResults}
              onSelect={handleSelectContact}
            />
            <Pagination
              resultsPerPage={resultsPerPage}
              totalResults={results.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
        {selectedContact && (
          <div className="selected-contact">
            <h2>Selected Contact</h2>
            <p>
              <strong>Name:</strong>{" "}
              {`${selectedContact.first_name} ${selectedContact.last_name}`}
            </p>
            <p>
              <strong>Email:</strong> {selectedContact.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedContact.phone}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${selectedContact.streetAddress}, ${selectedContact.city}, ${selectedContact.state} ${selectedContact.zipCode}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
