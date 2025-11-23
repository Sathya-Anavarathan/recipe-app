// i
import express from 'express';
import connectDB from "./src/config/db.js";
import recipeRouter from "./src/routes/recipeRouter.js";
import errorHandler from './src/middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT ||  5000 ;

app.use(express.json());




// All recipe routes
app.use("/api/recipe", recipeRouter);


app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});
