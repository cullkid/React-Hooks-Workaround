# React Posts

This project contains two React components that demonstrate basic state management and component communication.

## Components

### Posts

The `Posts` component displays a list of blog post titles that are loaded from a JSON file (`data.json`). When a user clicks on a post title, the `Details` component is rendered to display the full post.

#### State Management

The `Posts` component uses the `useState` hook to manage two pieces of state:

- `selectedPost`: the currently selected post to display in the `Details` component
- `posts`: an array of blog post objects loaded from the `data.json` file

The `useEffect` hook is used to load the data from `data.json` and update the `posts` state when the component is mounted.

#### JavaScript / Array / Object Functions

- `useState`: a hook that returns an array with two values: the current state value and a function to update the state
- `useEffect`: a hook that runs a function when the component mounts (similar to the `componentDidMount` method in class components)
- `map`: a method on arrays that allows you to create a new array by calling a function on each element of the original array
- `key`: a special attribute that should be included on dynamically generated list items to help React efficiently update the DOM

#### How to Read the Code

To understand how the `Posts` component works, start by looking at the `useState` hook that initializes the component's state variables (`selectedPost` and `posts`).

Next, look at the `useEffect` hook that loads the data from `data.json` and updates the `posts` state when the component is mounted.

Finally, look at the `render` method, which conditionally renders either the list of post titles or the `Details` component, based on whether `selectedPost` is `null`.

### Details

The `Details` component displays the full content of a blog post and provides a button to close the component.

#### Component Communication

The `Details` component receives a single `post` prop that contains the blog post data to display. When the user clicks the "Close" button, the `onClose` prop function is called to update the state in the `Posts` component and hide the `Details` component.

## Installation

1. Clone this repository or fork it and clone your own fork. git clone https://github.com/kingsley-ijomah/React-State-Projects.git

2. Navigate into the project directory.

3. Install dependencies using Yarn.

4. Start the development server.


## Next Steps

To better understand how these components work, try adding a new post to the `data.json` file and see how it appears in the `Posts` component. Alternatively, try modifying the `Details` component to display additional data about the blog post.

## Motivation

> “Remember, learning to code is a journey, and it takes time and practice to become proficient. Stay motivated, stay focused, and keep learning!"

