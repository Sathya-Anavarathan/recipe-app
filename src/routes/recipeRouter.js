import express from 'express';
// import { createRecpie } from '../models/recipeModel';

// import { createRecipe } from "../controllers/recipeController.js";

import { createRecipe, getAllRecipes ,getRecipeById} from "../controllers/recipeController.js";
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
router.patch("/:id",verifyByrecipe,(req,res)=>{
    res.send(`recipe with id ${req.params.id} has been updated`);
});

// deleteRecipe

router.delete("/:id",verifyByrecipe,(req,res)=>{
    res.send(`recipe with id ${req.params.id} has been deleted`);
});

export default router