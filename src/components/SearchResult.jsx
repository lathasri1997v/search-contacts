import React from "react";
import "./SearchResult.css";

const SearchResult = ({ contact, onSelect }) => {
  return (
    <tr>
      <td>{`${contact.first_name} ${contact.last_name}`}</td>
      <td>{contact.dob}</td>
      <td>{contact.streetAddress}</td>
      <td>{contact.city}</td>
      <td>{contact.state}</td>
      <td>{contact.zipCode}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={() => onSelect(contact)}>Select</button>
      </td>
    </tr>
  );
};

export default SearchResult;