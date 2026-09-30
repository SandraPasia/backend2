import pool from '../config/db.js';

export const fetchAllstudent = async () => {
  const [rows] = await pool.quer("SELECT * FROM student");
  return rows;
}