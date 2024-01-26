import { GET_STUDENT_DETAIL, SET_STUDENT_DETAIL, UPDATE_STUDENT } from './constants';

export const getStudentDetail = (id, callback) => ({
  type: GET_STUDENT_DETAIL,
  id,
  callback,
});

export const setStudentDetail = (studentDetailData) => ({
  type: SET_STUDENT_DETAIL,
  studentDetailData,
});

export const updateStudent = (id, studentData) => ({
  type: UPDATE_STUDENT,
  id,
  studentData,
});
