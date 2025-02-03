# IXO

## Session Server

- deno init
- deno add npm:socket.io

add task in deno.json

```JSON
{
  "tasks": {
    "start": "deno run --allow-net server.ts"
  },
  ...
}
```

create folder

```
session-server/
├── src/
│   ├── controllers/              # Handles requests and sends responses
│   │   ├── userController.ts
│   │   ├── authController.ts
│   │   └── ...
│   ├── services/                 # Business logic and service-level operations
│   │   ├── userService.ts
│   │   ├── authService.ts
│   │   └── ...
│   ├── routes/                   # Routes for the application
│   │   ├── userRoutes.ts
│   │   ├── authRoutes.ts
│   │   └── index.ts              # Combines all route files
│   ├── models/                   # Data models or schemas (if using a database)
│   │   ├── userModel.ts
│   │   └── ...
│   ├── middlewares/              # Middleware for request handling
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── ...
│   ├── config/                   # Configuration files (e.g., env variables)
│   │   ├── dbConfig.ts
│   │   └── appConfig.ts
│   ├── utils/                    # Utility functions/helpers
│   │   ├── hashPassword.ts
│   │   ├── validateEmail.ts
│   │   └── ...
│   ├── database/                 # Database connection and initialization
│   │   ├── connection.ts
│   │   ├── migrations.ts
│   │   └── seed.ts
│   ├── tests/                    # Unit and integration tests
│   │   ├── controllers/
│   │   ├── services/
│   │   └── ...
│   ├── server.ts                 # Entry point for the server
│   └── README.md                 # Project documentation
```

create server.ts

```Typescript
```
