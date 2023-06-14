# Movie Search App

This project demonstrates the use of React state management, asynchronous fetch requests, and the implementation of a simple movie search application using The Movie Database (TMDb) API.

## Key Concepts

- State management with React hooks (useState)
- Fetching data from an API using async/await
- Handling form submission and input changes
- Displaying a list of movie results

## Understanding the Code

The main component, `MovieSearch`, contains two states, `query` and `movies`. The `query` state holds the search input value, and the `movies` state holds the search results.

The `searchMovies` function is an asynchronous function that fetches movie data from the TMDb API based on the user's input. It updates the `movies` state with the fetched data.

The component renders a form and a movie list. The form contains an input field for the movie name and a search button. The movie list displays the movie results.

## Getting Started

To get started, clone or fork the project from the GitHub repository: [React-State-Projects](https://github.com/kingsley-ijomah/React-State-Projects)

```bash
git clone https://github.com/kingsley-ijomah/React-State-Projects.git
cd React-State-Projects
yarn
yarn dev
```
## Assignment
As a small assignment to further your understanding, try adding more information to the movie card, such as an overview, genre, or cast members. You can explore the TMDb API documentation to find additional data to display.


> "The only way to do great work is to love what you do."
As a beginner developer, it's easy to get discouraged when you encounter obstacles or run into problems. But the truth is, making mistakes and encountering challenges is an inevitable part of the learning process. Every time you encounter a problem and work through it, you are growing as a developer and expanding your skills.