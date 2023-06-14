# React Contact List

This repository contains a simple contact list application built using React. It demonstrates the basic concepts of React components, hooks, and state management while working with an array of objects.

## Table of Contents

- [Introduction](#introduction)
- [Key Concepts](#key-concepts)
  - [React Components](#react-components)
  - [Hooks](#hooks)
  - [State Management](#state-management)
  - [Sass Styling](#sass-styling)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

The React Contact List application displays a list of contacts with their names and email addresses. Users can check or uncheck the contacts and delete the selected contacts using a button. The application also features a "Check All" functionality to select or deselect all contacts at once.

## Key Concepts

### React Components

The main component used in this application is `ContactList`. This functional component is responsible for rendering the contact list, managing state, and handling user interactions.

### Hooks

The application makes use of the following React hooks:
- `useState`: To manage the local state of the component, including the `contacts` and `checkAll` states.
- `useEffect`: To set the initial `contacts` state from a JSON data file when the component is mounted.

### State Management

State management in this application is handled using the `useState` hook. The `contacts` state holds an array of contact objects, while the `checkAll` state holds a boolean value representing whether all contacts are selected or not. The application provides functions to handle changes in these states based on user interactions.

### Sass Styling

The application uses Sass (SCSS) to style the `ContactList` component, making it more visually appealing. This demonstrates how to use Sass for styling React components.

## Installation

To run the React Contact List application, follow these steps:

1. Clone this repository: `git clone https://github.com/kingsley-ijomah/React-State-Projects`
2. Navigate to the project folder: `cd contact-list`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

## Usage

To use the application, simply check or uncheck the contacts in the list. You can also use the "Check All" checkbox to select or deselect all contacts at once. To delete the selected contacts, click the "Delete Selected Contacts" button.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
