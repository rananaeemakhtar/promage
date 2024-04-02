const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const connectDB = require('./config/db');
const router = express.Router();
const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json())

app.use(cors());

app.use('/api/projects', require('./routes/project'));
app.use('/api/events/subscriptions', require('./routes/events-subscription'));

app.get('/api/status', (req, res) => {
    res.send("App is running")
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
