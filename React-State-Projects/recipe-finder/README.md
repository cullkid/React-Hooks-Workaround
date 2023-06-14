# Recipe Finder

This is a React component that allows users to search for recipes using the Spoonacular API. It includes a search form and displays the results in a list of cards, which can be expanded to show more details about the recipe.

## Subject Covered

- State management using `useState`
- Asynchronous data fetching with `fetch` and `async/await`
- Handling user events with `onClick` and `onChange`
- Conditional rendering with `if` statements and the ternary operator
- React component structure and modularization

## How to Read the Code

The code is structured into two components: `RecipeFinder` and `Recipe`. 

`RecipeFinder` is the main component that handles user input and search logic. It uses `useState` to keep track of the search query and the list of recipes that match the query. When the user submits the form, it sends a request to the Spoonacular API using `fetch` and updates the state with the results.

`Recipe` is a child component that displays an individual recipe as a card. It uses `useState` to keep track of whether the details section of the card is expanded or not. When the user clicks on the "Read More" button, it sends a request to the Spoonacular API for more details about the recipe and updates the state with the results. The details are then displayed below the card.

## Installation and Setup

To run this component locally, you can follow these steps:

1. Clone or fork the repository: `git clone https://github.com/kingsley-ijomah/React-State-Projects.git`
2. Navigate to the `recipe-finder` directory: `cd React-State-Projects/recipe-finder`
3. Install dependencies: `yarn install`
4. Start the development server: `yarn dev`
5. Open your browser

## Next Steps

To further develop your understanding of this component, you could try:

- Adding pagination to the search results
- Allowing users to filter results by various criteria (e.g. dietary restrictions)
- Adding a "favorites" feature that allows users to save recipes for later viewing

## Motivation

> "You don't have to be great to start, but you have to start to be great."

Everyone has to start somewhere and progress is made by taking action, even if it's imperfect or small. As a beginner in coding, it's important to remember that mistakes and challenges are part of the learning process and that persistence and determination are key to becoming a great developer.
