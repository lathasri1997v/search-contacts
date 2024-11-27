import React, { useState }from 'react';
import "./SearchContainer.css";

export const SearchContainer = ({ onSearch }) => {
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
        <div className="search-bar">
           <div className='container1'>
                <input
                    name="firstName"
                    placeholder="First Name"
                    value={filters.firstName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={filters.lastName}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={filters.dob}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={filters.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={filters.phone}
                    onChange={handleInputChange}
                />
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
                <select
                    type="text"
                    name="state"
                    placeholder="State"
                    value={filters.state}
                    onChange={handleInputChange}>
                        <option value="">Select State</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                </select>
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={filters.zipCode}
                    onChange={handleInputChange}
                />
          </div>
          <button onClick={handleSearchClick}>Search</button>
        </div>
      );
    };

export default SearchContainer

