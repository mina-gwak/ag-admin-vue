import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: '/api',
  });
  return setInterceptors(instance);
}

const instance = createInstance();

function getData(url, startDate, endDate, page = 1) {
  if (url === 'events') {
    return instance.get(`api/${url}`, {
      params: { startDate, endDate, page }
    })
  } else return instance.get(`api/${url}/list`, {
    params: { startDate, endDate, page, },
  });
}

function addData(url, data) {
  return instance.post(`api/${url}`, {
    ...data,
  });
}

function deleteData(url, id) {
  if (url === 'events') {
    return instance.delete(`api/events`, { data: { id: [id] } })
  } else return instance.delete(`api/${url}/${id}`);
}

function updateData(url, id, updatedData) {
  return instance.patch(`api/${url}/${id}`, {
    ...updatedData,
  });
}

function getDetailData(url, id) {
  return instance.get(`api/${url}/${id}`);
}

function completeDistribution(url, id) {
  return instance.patch(`api/${url}/distribution/${id}`);
}

function endPosting(url, id) {
  return instance.delete(`api/${url}/${id}`);
}

export { getData, addData, deleteData, updateData, getDetailData, completeDistribution, endPosting };