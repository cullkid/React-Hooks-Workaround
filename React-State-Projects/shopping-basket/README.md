# Shopping Basket

This project demonstrates the use of React hooks, such as `useState` and `useEffect`, for state management. It also covers the use of `map`, `filter`, and `reduce` functions on arrays to manipulate data. 

## How to Read the Code

The code is divided into three components:
- `Basket`: handles the display of the shopping basket and its contents
- `Product`: displays an individual product with its name, price, and "Add to Basket" button
- `ProductList`: displays a list of `Product` components

In `ShoppingBasket`, the `useState` hook is used to manage the state of the shopping basket and its total price. 

The `addToBasket` function uses the `setBasket` function to add items to the basket. If an item already exists in the basket, its quantity is incremented by 1, otherwise a new item is added with a quantity of 1.

The `removeFromBasket` function uses the `setBasket` function to remove items from the basket. If the item has a quantity greater than 0, its quantity is decremented by 1, otherwise it is removed from the basket.

The `calculateTotal` function uses the `setTotal` function and the `reduce` function to calculate the total price of the items in the basket.

## Installation and Usage

1. Clone or fork the project from https://github.com/kingsley-ijomah/React-State-Projects
2. Navigate to the project directory and run `yarn` to install dependencies
3. Run `yarn dev` to start the project
4. Open http://localhost:3000 in your web browser or provided port number

## Next Steps

To further practice and understand the concepts covered in this project, try adding a feature to manually add a quantity of items in the shopping basket, right now it increments by one, but what about manually entrying 10 or 15?

## Motivation

As a developer, you will encounter many successes and failures throughout your career. It's important to remember that success is not the end and failure is not the end either. It takes courage to keep going and to keep learning, and that's what truly counts in the end.
