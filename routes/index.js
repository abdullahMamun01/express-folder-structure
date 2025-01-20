const userRouts = require('../modules/user/user.routes');

const router = require('express').Router();


const routes = [
    {
        path: '/users',
        route: userRouts
    }
];

// // Iterate over routes and use them in the router
routes.forEach(({ path, route }) => {
    router.use(path, route);
});

// Export the router to be used in the app.js or server entry file
module.exports = router; // Export router, not routes array
