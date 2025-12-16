# AI Surveillance MERN — Backend
## Setup
1. Copy `.env.example` to `.env` and set values (MONGO_URI, JWT_SECRET).
2. Run `npm install`
3. Start with `npm run dev` (requires nodemon) or `npm start`.
Backend runs on PORT (default 8080) and exposes:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/products (requires Authorization token)
- POST /api/products (requires Authorization token)
