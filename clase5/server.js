let express = require('express');
let app = express();
let cors = require('cors');
let candidateRoute = require('./Routes/candidatesRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', candidateRoute);

app.listen('5001', () => {
    console.log("http://localhost:5001");
})

