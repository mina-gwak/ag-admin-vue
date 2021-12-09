import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
})

function getKakaoConsults() {
  return instance.get('kakao-consults/list');
}

function filterKakaoConsults(startDate, endDate) {
  return instance.get('kakao-consults/list', {
    params: {
      startDate,
      endDate
    }
  })
}

function completeDistribution(id) {
  return instance.patch(`kakao-consults/distribution/${id}`);
}

export { getKakaoConsults, filterKakaoConsults, completeDistribution };