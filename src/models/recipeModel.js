import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    
    required: true, 
    trim: true 
  },
  description: {
    type: String,
    default: ""
  },
  
  ingredients: {
    type: [String], 
    required: true,
   
  },
 
  instructions: {
    type: [String], 
    required: true,
  },
  // OPTIONAL FIELDS
  prep_time: {
    type: String 
  },
  cook_time: {
    type: String
  },
  servings: {
    type: Number,
    min: 1 
  },
  
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;