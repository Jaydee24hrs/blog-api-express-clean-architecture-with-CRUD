# blog-api-express-clean-architecture-with-CRUD operations for Blog post with Express.js (Clean Architecture)
A clean and well structured RESTful  architecture Blog API with the create, read all, read one, update &amp; delete, all working perfectly in Postman

## Features
Clean Architecture (Domain - Use Cases - Repository - Infrastructure)
Full CRUD endpoints (`/api/posts`)
In-memory repository (easy to swap for MongoDB/PostgreSQL)
Basic validation and error handling
Tested with Jest + Supertest

## Tech Stack
Node.js
Express.js
UUID for IDs
Jest + Supertest for testing

## Setup & Run
```bash
git clone https://github.com/Jaydee24hrs/blog-api-express-clean-architecture-with-CRUD.git
cd blog-api-express-clean-architecture
npm install
npm start                 # Server runs on http://localhost:3000
npm test                 # Run tests
