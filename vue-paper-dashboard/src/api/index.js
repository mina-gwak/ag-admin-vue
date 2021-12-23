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

function addData(url, data) {
  return instance.post(`${url}`, {
    ...data,
  });
}

function deleteData(url, id) {
  return instance.delete(`${url}/${id}`);
}

function updateData(url, id, updatedData) {
  return instance.patch(`${url}/${id}`, {
    ...updatedData,
  });
}

function filterData(url, startDate, endDate) {
  return instance.get(`${url}/list`, {
    params: {
      startDate,
      endDate,
    },
  });
}

function getDetailData(url, id) {
  return instance.get(`${url}/${id}`);
}

function completeDistribution(url, id) {
  return instance.patch(`${url}/distribution/${id}`);
}

function endPosting(url, id) {
  return instance.delete(`${url}/${id}`);
}

export { getData, addData, deleteData, updateData, filterData, getDetailData, completeDistribution, endPosting };