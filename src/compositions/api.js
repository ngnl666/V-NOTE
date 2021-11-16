import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

export const _postNote = data => {
  return fetchData
    .post('/note', data)
    .then(res => res)
    .catch(err => console.log('發文失敗'));
};

export const _getAllNote = () => {
  return fetchData
    .get('/note')
    .then(res => res)
    .catch(err => console.log('取得文章列表失敗'));
};
