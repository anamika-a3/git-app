// // import  express  from 'express';
// import express from 'express';
import express from 'express';
const loginRoutes = require('./routes/loginRouter');
// import loginRoutes  from './routes/loginRouter';
const registerRoutes = require('./routes/registerRouter');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Hello World!..');
// });


app.use('/api/sign-up', registerRoutes)
app.use('/api/sign-in', loginRoutes);


const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

// export {}
// export default app;