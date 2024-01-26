import { CREATE_STUDENT } from './constants';

export const createStudent = (studentData, callback) => ({
  type: CREATE_STUDENT,
  studentData,
  callback,
});
