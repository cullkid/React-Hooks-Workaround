// Import necessary dependencies and styles:
// - React: Library for building UI components
// - useState: React hook for managing component state
// - DynamicField.scss: Styling specific to the DynamicField component
import React, { useState } from 'react';
import './DynamicField.scss';

// Define the DynamicField functional component
// This component represents a form for adding and removing telephone numbers
export default function DynamicField() {
  // Declare state variables for managing the telephone numbers list:
  // - telephoneNumbers: An array to store the list of telephone numbers
  // - setTelephoneNumbers: A function to update the telephoneNumbers state
  const [telephoneNumbers, setTelephoneNumbers] = useState(['']);

  // Function to handle input changes when a user types a new value in a telephone number field
  const handleInputChange = (index, value) => {
    // Create a new array from the existing telephoneNumbers and update the value at the given index
    const newTelephoneNumbers = [...telephoneNumbers];
    newTelephoneNumbers[index] = value;
    // Update the telephoneNumbers state with the modified array
    setTelephoneNumbers(newTelephoneNumbers);
  };

  // Function to add a new blank telephone number field when the "Add More" button is clicked
  const addTelephoneNumber = () => {
    // Update the telephoneNumbers state by adding a new empty string to the array
    setTelephoneNumbers([...telephoneNumbers, '']);
  };

  // Function to remove a telephone number field when the "Remove" button is clicked
  const removeTelephoneNumber = (index) => {
    // Update the telephoneNumbers state by filtering out the telephone number at the given index
    setTelephoneNumbers(telephoneNumbers.filter((_, i) => i !== index));
  };

  // The rendered output of the DynamicField component
  return (
    <div className='telephone'>
      <h1>Telephone Form</h1>
      <form>
        {/* Render a telephone number input field for each item in the telephoneNumbers array */}
        {telephoneNumbers.map((telephoneNumber, index) => (
          <div key={index} className='telephone__item'>
            <input
              className='telephone__input'
              type="text"
              id={`telephone-${index}`}
              value={telephoneNumber}
              placeholder="Telephone Number"
              // Update the value in the telephoneNumbers array when the input value changes
              onChange={(e) => handleInputChange(index, e.target.value)}
            />

            {/* Button to remove the current telephone number input field */}
            <button type="button" onClick={() => removeTelephoneNumber(index)}>
              Remove
            </button>
          </div>
        ))}

        {/* Button to add a new blank telephone number input field */}
        <button className='telephone__more' type="button" onClick={addTelephoneNumber}>
          Add More
        </button>
      </form>
    </div>
  );
}
