import axios from 'axios';

const instance = axios.create({
  baseURL: '/api'
})

function getKakaoConsults() {
  return instance.get('kakao-consults/list');
}

export { getKakaoConsults };