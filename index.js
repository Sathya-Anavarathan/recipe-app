// i
import express from 'express';
import connectDB from "./src/config/db.js";
import recipeRouter from "./src/routes/recipeRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect DB BEFORE starting server
connectDB();

// All recipe routes
app.use("/api/recipe", recipeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
