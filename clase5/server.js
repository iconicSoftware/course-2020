let express = require('express');
let app = express();
let candidateRoute = require('./Routes/candidatesRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', candidateRoute);

app.listen('5000', () => {
    console.log("http://localhost:5000");
})

