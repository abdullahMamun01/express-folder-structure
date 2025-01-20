/modules
└── /users
    │   └── userController.js       # Functions to handle user-related routes
    │   └── userModel.js            # Mongoose schema/model for User
    │   └── userRoutes.js           # User API routes
    │   └── userService.js          # Business logic for user actions (e.g., create, update)
    │   └── userValidator.js        # Validation for user-related data (e.g., registration)
    │   └── userTypes.js            # TypeScript types related to the user
        └── userAuthMiddleware.js   # User-specific middleware (e.g., check if logged in)

    /products
    │   └── productController.js       # Functions to handle product-related routes
    │   └── productModel.js            # Mongoose schema/model for Product
    │   └── productRoutes.js           # Product API routes
    │   └── productService.js          # Business logic for product actions (e.g., create, update)
    │   └── productValidator.js        # Validation for product-related data (e.g., product creation)
    │   └── productTypes.js            # TypeScript types related to the product


index.js   <---------------------- route(index.js) <--------------------------- module
                                    [
                                        {
                                            path: route path,
                                            route: route from modules
                                        }
                                    ]