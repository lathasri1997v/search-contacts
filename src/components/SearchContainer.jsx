import React, { useState }from 'react';
import "./SearchContainer.css";

const SearchContainer = ({ onSearch }) => {
    const [filters, setFilters] = useState ({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
      };
    
      const handleSearchClick = () => {
        onSearch(filters);
      };
    
      return (
        <div className="search-bar-container">
           <div className='container1'>
                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleInputChange}
                />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    required
                />
                <input
                    name="dob"
                    type="date"
                    placeholder="DOB"
                    onChange={handleInputChange}
                />
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleInputChange}
                />
                <button onClick={handleSearchClick}>Search</button>
           </div>
          <div className='container2'>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={filters.streetAddress}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={filters.city}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={filters.state}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={filters.zipCode}
                    onChange={handleInputChange}
                />
          </div>
        </div>
      );
    };

export default SearchContainer

