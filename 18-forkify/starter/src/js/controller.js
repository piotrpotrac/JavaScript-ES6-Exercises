import * as model from './model.js';

import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// 1)Loading recipe

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    recipeView.renderSpinnner();

    // 1)Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err.message);
  }
};

// controlRecipes();
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
