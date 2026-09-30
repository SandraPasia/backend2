import * studentModel from '../model/student.js';

export const fetchAllStudent = async() => {
  const student = await studentModel.fetchAllStudent();
  return student;
};