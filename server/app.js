const express = require('express');
const FreeAI = require('@milcondev/free-ai');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const httpStatus = require('http-status')
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const chatBot = new FreeAI(process.env.API_KEY)

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'))

app.post('/', (req, res) => {
    const question = req.body.question;
    chatBot.askQuestion(question)
        .then((answer) => {
             res.status(httpStatus.OK).json({answer: answer});
         })
        .catch((error) => {
             res.status(httpStatus.OK).json({code: httpStatus.SERVICE_UNAVAILABLE, message: httpStatus["503_MESSAGE"]});
         });
})


app.get('/**', (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({code: httpStatus.NOT_FOUND, message: 'Page Not Found'})
})

app.use((err, req, res, next) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({code: httpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error'})
})


const listener = app.listen(process.env.PORT, 'localhost', () => {
    console.log(`Server is running on http://${listener.address().address}:${listener.address().port}`);
})