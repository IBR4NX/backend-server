import {PORT,corsUrl,environment} from './config.js';
import express from 'express';
import bcrypt from 'bcrypt';
import router from './routes/router.js';
import cors from 'cors';
console.clear()
import './database/mongooseDB.js';
const app = express();
app.use(express.json());
app.use(cors({origin:corsUrl,optionsSuccessStatus:200}));
app.use('/api', router);

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.use((err, req, res, next) => {
  const status = res.statusCode && res.statusCode !== 200? res.statusCode: 500;
  // console.log(req.headers)
  if (environment === "production") {
  res.status(status).json({
    message: err.message,
    // stack: err.stack
  });
} else {
  res.status(status).json({
    message: err.message,
    stack: err.stack
  });
  }
});

app.listen(PORT , 
  ()=>{console.log(`\n\x1b[1;32m➜  Server:\x1b[0m is up and running on:\x1b[34m http://localhost:${PORT}/ \x1b[0m  `);});
