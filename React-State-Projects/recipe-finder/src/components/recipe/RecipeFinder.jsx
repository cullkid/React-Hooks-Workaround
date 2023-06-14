// src/RecipeFinder.js
import React, { useState } from 'react';
import styles from './RecipeFinder.module.scss';

const Recipe = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const fetchRecipeDetails = async () => {
    // Replace with your Spoonacular API key (https://spoonacular.com/food-api/console#Dashboard)
    const API_KEY = 'a9a574954c204a6288c84bcb05a1a3ca'; 
    const url = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipeDetails(data);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDetails = () => {
    if (!showDetails && !recipeDetails) {
      fetchRecipeDetails();
    }
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.recipe}>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <button onClick={toggleDetails}>
        {showDetails ? 'Read Less' : 'Read More'}
      </button>
      {showDetails && recipeDetails && (
        <div className={styles.recipeDetails}>
          <p>Ready in {recipeDetails.readyInMinutes} minutes</p>
          <p>Servings: {recipeDetails.servings}</p>
          {recipeDetails.summary && (
          <div
            dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
          ></div>
        )}
        </div>
      )}
    </div>
  );
};

const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (e) => {
    e.preventDefault();
    const API_KEY = 'a9a574954c204a6288c84bcb05a1a3ca'; // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={searchRecipes} className={styles.form}>
        <label htmlFor="query">Recipe Name:</label>
        <input
          type="text"
          name="query"
          placeholder="e.g. Chocolate Cake"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <div className={styles.container}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeFinder;
