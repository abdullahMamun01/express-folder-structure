
const express = require('express');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/v1', routes)


// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


// global error
app.use((err, req, res, next) => {
    if (err && err.statusCode === 500) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    } else {
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    // res.status(err.statusCode).json({
    //     status: 'error',
    //     message: err.message,
    // });

});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
