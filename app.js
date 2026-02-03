import {PORT,corsUrl,environment} from './config.js';
import express from 'express';
import bcrypt from 'bcrypt';
import router from './routes/router.js';
import cors from 'cors';
console.clear()
import './database/mongooseDB.js';
import { fileURLToPath } from 'url'
import path from 'path'
const app = express();
app.use(express.json());
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
app.use(cors({origin:corsUrl,optionsSuccessStatus:200}));
app.use(express.static(path.join(__dirname, "./views/dist")));
app.use('/api', router);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/test', (req, res) => {
  res.render('index.ejs');
  res.end();  
});
 

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.use((err, req, res, next) => {
  const status = res.statusCode && res.statusCode !== 200? res.statusCode: 500;
  // console.log(req.headers)
  if (environment === "production") {
  res.status(status).json({
    message: err.message,
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
