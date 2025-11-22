
// import Recipe from "../models/recipeModels.js";

import Recipe from "../models/recipeModel.js";


export const createRecipe = async(req, res) => {
    try{
        const {title, description, ingredients, instructions,} = req.body;

const recipe =new Recipe({
    title, 
    description, 
    ingredients,
     instructions,
});
await recipe.save();

return res.status(201).json({
      status: "success",
      message: "Recipe created successfully",
      data: recipe,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }

};
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({
      status: "success",
      message: "All recipes fetched",
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
// Get recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Recipe fetched successfully",
      data: recipe,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// update recipe by ID
export const updateRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const recipe = await Recipe.findByIdAndUpdate(id, updates, { new: true , runValidators: true });
    if (!recipe) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Recipe updated successfully",
      data: recipe,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};


// delete recipe by ID
export const deleteRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
     return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
       
    }
    res.status(200).json({
      status: "success",
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};