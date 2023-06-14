// Import necessary dependencies and styles:
// - React: Library for building UI components
// - useState, useEffect: React hooks for managing component state and side effects
// - data: JSON data containing contact information
// - ContactList.scss: Styling specific to the ContactList component
import React, { useState, useEffect } from 'react';
import data from './data.json';
import './ContactList.scss';

// Define the ContactList functional component that represents the main contact list
export default function ContactList() {
  // Declare state variables for managing the list of contacts and the "Check All" checkbox status:
  // - contacts: An array to store the contact list
  // - setContacts: A function to update the contacts state
  // - checkAll: A boolean to store the "Check All" checkbox state
  // - setCheckAll: A function to update the checkAll state
  const [contacts, setContacts] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  // Function to handle the "Check All" checkbox state change when it is clicked
  const handleCheckAllChange = (isChecked) => {
    // Update the checkAll state and set the checked status for all contacts
    // based on the isChecked value (true if checked, false if unchecked)
    setCheckAll(isChecked);
    setContacts(
      contacts.map((contact) => ({ ...contact, checked: isChecked }))
    );
  };

  // Function to handle individual contact checkbox state change when it is clicked
  const handleCheckboxChange = (id, isChecked) => {
    // Update the checked status of the specific contact
    // by iterating through the contacts and finding the one with the matching id
    const updatedContact = contacts.map((contact) => {
      if (contact.id === id) {
        // If the contact has the matching id, update its checked status based on isChecked
        return { ...contact, checked: isChecked };
      }
      // If the contact does not have the matching id, return it unchanged
      return contact;
    });
    // Update the contacts state with the updated contact list
    setContacts(updatedContact);
  };

  // Function to handle deleting selected contacts when the "Delete Selected Contacts" button is clicked
  const handleDeleteSelectedContacts = () => {
    // Update the contacts state by filtering out the contacts with checked status
    setContacts(contacts.filter((contact) => !contact.checked));
  };

  // useEffect hook for managing side effects, in this case, initializing the contacts state
  // with data from data.json when the component is mounted
  useEffect(() => {
    setContacts(data);
  }, []);

  // The rendered output of the ContactList component
  return (
    <div className='contacts'>
      <h1>Contact List</h1>
      <input
        type="checkbox"
        checked={checkAll}
        onChange={(e) => handleCheckAllChange(e.target.checked)}
      />
      <span>Check All</span>
      <hr />

      {contacts.map((contact) => (
        <div key={contact.id} className='contacts__item'>
          <input
            type="checkbox"
            checked={contact.checked}
            onChange={(e) => handleCheckboxChange(contact.id, e.target.checked)}
          />
          <span>
            {contact.name} ({contact.email})
          </span>
        </div>
      ))}
      <hr />
      <button onClick={handleDeleteSelectedContacts}>
        Delete Selected Contacts
      </button>
    </div>
  );
}
