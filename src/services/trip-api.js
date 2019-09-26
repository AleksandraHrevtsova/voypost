import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export const fetchTrips = () => {
  return axios.get(`/trips`).then(response => response.data);
};

export const postTrip = post => {
  return axios.post(`/trips`, post).then(response => response.data);
};

export const deleteTrip = id => {
  return axios.delete(`/trips/${id}`);
};

export const updateTrip = (id, update) => {
  return axios.patch(`/trips/${id}`, update).then(response => response.data);
};
