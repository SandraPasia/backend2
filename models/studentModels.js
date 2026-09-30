import * as studentController from ../controller/studentController.js'; 

import express from "express";

const studentRoute = express.Router ();

studentRoute get ('/all', studentController. fetchAllstudent);

export default studentRoute;