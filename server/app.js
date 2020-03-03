const express = require('express');
const userRouter = require('./routers/user');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');
const User = require('./models/User');
const port = process.env.PORT;
require('./db/db');

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: [
        'http://localhost:8000',
    ], credentials: true
}));
app.use(express.json());



app.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})