require('dotenv').config();

const port = process.env.PORT;

const print = () => {
  console.log("Environment:", process.env.ENV)
}

setInterval(print, 5000);
