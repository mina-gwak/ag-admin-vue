import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

function getConsults(url) {
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
  })
}

export { getConsults, filterConsults, completeDistribution, showDetail, updateConsults };