const mongooes = require('mongoose');
const config = require('config');

// get mongoURI
const dbURI = process.env.MONGO_URI || config.get('MONGO_URI');

// connect mongoDB
const connectDB = async () => {
    try {
        await mongooes.connect(dbURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log(`DB connected successfully...`)
    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;