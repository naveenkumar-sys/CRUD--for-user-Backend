# CRUD Backend (Node + Express + MongoDB)

A lightweight REST backend for a React CRUD application. Built with Node.js, Express and MongoDB (Mongoose).

Overview
- Provides create / read / update / delete operations for a `user` model.

Stack
- Node.js
- Express
- MongoDB + Mongoose

Requirements
- Node.js 14+
- MongoDB (local or Atlas)

Quick start
1. Install dependencies:

```powershell
npm install
```

2. Create a `.env` file in the project root with these keys (the code expects `MONGODB_URL`):

```
PORT=3000
MONGODB_URL=mongodb://localhost:27017/crud_db
```

3. Start the server:

```powershell
npm start
# or with nodemon for development:
nodemon server.js
```

App basics
- Base URL: `http://localhost:<PORT>` (defaults to `3000`)
- Health route: `GET /` — returns a welcome message

API (actual routes implemented)
- Base prefix: `/api/user`
- `POST /api/user/create` — create a user
	- JSON body: `{ "username": "Alice", "age": 25, "DOB": "1999-01-01", "profile": "profile-url-or-text" }`
- `GET /api/user/get` — fetch all users
- `GET /api/user/get/:id` — fetch a single user by id
- `PUT /api/user/update/:id` — update a user by id (body uses same fields as create)
- `DELETE /api/user/delete/:id` — delete a user by id

Model fields
- `username` — String (required)
- `age` — Number (required)
- `DOB` — String (required)
- `profile` — String (required)
- `role` — String, enum [`admin`,`user`] (default `user`)

Examples (curl)

- Create user:

```bash
curl -X POST http://localhost:3000/api/user/create \
	-H "Content-Type: application/json" \
	-d '{"username":"Alice","age":25,"DOB":"1999-01-01","profile":"/images/alice.png"}'
```

- Get all users:

```bash
curl http://localhost:3000/api/user/get
```

- Get user by id:

```bash
curl http://localhost:3000/api/user/get/<USER_ID>
```

- Update user:

```bash
curl -X PUT http://localhost:3000/api/user/update/<USER_ID> \
	-H "Content-Type: application/json" \
	-d '{"username":"Alice B","age":26}'
```

- Delete user:

```bash
curl -X DELETE http://localhost:3000/api/user/delete/<USER_ID>
```

Notes & recommendations
- The DB connection uses the `MONGODB_URL` environment variable in `Database/db.config.js` — ensure it is set correctly.
- There is no authentication implemented in this repo; add auth and input validation before production use.
- Consider adding request validation (Joi/express-validator), centralized error handling, and proper logging.

Files of interest
- `server.js` — app entry and route mounting
- `Database/db.config.js` — DB connection (reads `MONGODB_URL`)
- `Routes/UserRouter.js` — API routes
- `Controllers/UserControllers.js` — route handlers
- `Models/userSchema.js` — Mongoose schema

License: MIT

