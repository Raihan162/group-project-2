import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  allTeacher: 'teacher',
  createStudent: 'student',
  studentDetail: 'student',
  updateStudent: 'student',
  getStudents: 'student',
  register: 'teacher',
  login: 'teacher',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'GET');
export const getTeacher = () => callAPI(urls.allTeacher, 'GET');
export const getStudentDetail = (id) => callAPI(`${urls.studentDetail}/${id}`, 'GET');

export const createStudent = (studentData) => callAPI(urls.createStudent, 'POST', {}, {}, studentData);
export const updateStudent = (id, studentData) => callAPI(`${urls.updateStudent}/${id}`, 'PATCH', {}, {}, studentData);

export const getStudents = () => callAPI(urls.getStudents, 'GET');

export const getStudentsPerPage = (page) => callAPI(urls.getStudents, 'GET', {}, { _page: page });

export const getMyStudent = (id) => callAPI(urls.getStudents, 'GET', {}, { teacher_id: id });

export const deleteMyStudent = (id) => callAPI(`${urls.getStudents}/${id}`, 'DELETE');

export const registerUser = (user) => callAPI(urls.register, 'POST', {}, {}, user);

export const login = ({ email, password }) => {
  return callAPI(urls.login, 'GET', {}, { email: email, password: password }, {});
};
