import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  getStudents: 'student',
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

// export const ping = () => callAPI(urls.ping, 'get');

export const getStudents = () => {
  return callAPI(urls.getStudents, 'GET')
}

export const getStudentsPerPage = (page) => {
  return callAPI(urls.getStudents, 'GET', {}, { _page: page })
}

export const getMyStudent = (id) => {
  return callAPI(urls.getStudents, 'GET', {}, { teacher_id: id })
}

export const deleteMyStudent = (id) => {
  return callAPI(`${urls.getStudents}/${id}`, 'DELETE')
}