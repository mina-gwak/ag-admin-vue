import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: '/api',
  });
  return setInterceptors(instance);
}

const instance = createInstance();

function getData(url) {
  return instance.get(`${url}/list`);
}

function filterConsults(url, startDate, endDate) {
  return instance.get(`${url}/list`, {
    params: {
      startDate,
      endDate,
    },
  });
}

function completeDistribution(url, id) {
  return instance.patch(`${url}/distribution/${id}`);
}

function showDetail(url, id) {
  return instance.get(`${url}/${id}`);
}

function updateConsults(url, id, updatedData) {
  return instance.patch(`${url}/${id}`, {
    ...updatedData,
  });
}

function loginUser(user) {
  return instance.post('login', {
    ...user,
  });
}

function endPosting(url, id) {
  return instance.delete(`${url}/${id}`);
}

function addData(url, data) {
  return instance.post(`${url}`, {
    ...data,
  });
}

function deleteData(url, id) {
  return instance.delete(`${url}/${id}`);
}

export { getData, filterConsults, completeDistribution, showDetail, updateConsults, loginUser, endPosting, addData, deleteData };