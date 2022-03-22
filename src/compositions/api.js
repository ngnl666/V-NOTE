import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

// Note api
export const _editNote = (id, tempData) => {
  return fetchData
    .put(`/note/${id}`, { data: tempData })
    .then(res => res)
    .catch(err => err);
};

export const _deleteOneNote = id => {
  return fetchData
    .delete(`/note/${id}`)
    .then(res => res)
    .catch(err => err);
};

export const _getAllNote = uid => {
  return fetchData
    .get(`/note/all/${uid}`)
    .then(res => res)
    .catch(err => err);
};

export const _getOneNote = id => {
  return fetchData
    .get(`/note/${id}`)
    .then(res => res)
    .catch(err => err);
};

export const _postNote = data => {
  return fetchData
    .post('/note', data)
    .then(res => res)
    .catch(err => err);
};

// Publish api
export const _getPaginate = page => {
  return fetchData
    .get(`/publish/${page}`)
    .then(res => res)
    .catch(err => err);
};

export const _getOnePublishNote = id => {
  return fetchData
    .get(`/publish/note/${id}`)
    .then(res => res)
    .catch(err => err);
};

export const _likedNote = (id, data) => {
  return fetchData
    .put(`/publish/${id}`, data)
    .then(res => res)
    .catch(err => err);
};

export const _publishNote = data => {
  return fetchData
    .post('/publish', data)
    .then(res => res)
    .catch(err => err);
};

export const _removePublish = id => {
  return fetchData
    .delete(`/publish/${id}`)
    .then(res => res)
    .catch(err => err);
};
