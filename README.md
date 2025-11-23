📝 Recipe App
Overview
The Recipe App is a full-stack application built with Node.js, Express, and MongoDB (Atlas).
It allows users to create, read, and manage recipes through a RESTful API.

Features

=>Connects to MongoDB Atlas for storing recipes
=>Supports CRUD operations for recipes
=>JSON-based API for seamless integration with frontend or Postman
=>Environment configuration with .env using dotenv
=>Easy setup and extensible for adding more features

Tech Stack

1.Backend: Node.js, Express
2.Database: MongoDB (Atlas)
3.ORM/ODM: Mongoose
4.Environment Management: dotenv
5.Dev Tools: Nodemon for automatic server reload

Prerequisites
Node.js >= v22.12.0
NPM >= 8.0.0
MongoDB Atlas account (or local MongoDB instance)

Installation

Clone the repositorygit clone <your-repo-url>
cd recipe-app

Install dependencies

npm install
Start the server
npm run dev
Server will run at: http://localhost:3000

sample Endpoints

Method	Endpoint	Description

GET	/recipes	Get all recipes
POST	/recipes	Create a new recipe
GET	/recipes/:id	Get a recipe by ID
PATCH /recipes/:id	Update a recipe by ID
DELETE	/recipes/:id	Delete a recipe by ID

