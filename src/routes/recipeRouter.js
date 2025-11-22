import express from 'express';
// import { createRecpie } from '../models/recipeModel';

// import { createRecipe } from "../controllers/recipeController.js";

import { createRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } from "../controllers/recipeController.js";
import {  verifyByrecipe } from '../middlewares/recipeMiddleware.js';



const router=express.Router();


// Router level middleware
router.use((req, res, next) => {
  console.log("recpie Router Middleware Executed");
  console.log(req.method, req.url, new Date().toLocaleString());
  next();
});

// create recipe route
router.post("/",createRecipe)

// getAllRecpie
router.get("/", getAllRecipes);
// getRecpieById
router.get("/:id", getRecipeById,verifyByrecipe);

// updateRecipe
router.patch("/:id", verifyByrecipe, updateRecipeById);

// deleteRecipe

router.delete("/:id",verifyByrecipe,deleteRecipeById);


export default router