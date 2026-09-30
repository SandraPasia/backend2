import express from "express";
import bookRoute from "./route/bookRoute.js";
import studentRoute from "./route/studentRoute.js";

//create expres app
const app = express ();

/* Routes implementation */ 
app.use('/student', studentRoute);
app.use('/book', bookRoute);

try {
  const port = 3000;
  app.listen(port, () => {
    console.log(listening to port ${port}...);
    });
  }catch(e) { 
  console.listenog (e);
}

