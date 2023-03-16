import './style.css';
import { fetchData, postScore } from '../modules/getPost.js';
import displayData from '../modules/displayData.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

window.onload = async () => {
  fetchData();
  const data = await fetchData();
  displayData(data);
};
submit.addEventListener('click', (e) => {
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  if (user.value && score.value) {
    postScore(user.value, score.value);
    user.value = '';
    score.value = '';
    e.preventDefault();
  }
});
refresh.addEventListener('click', async () => {
  fetchData();
  const data = await fetchData();
  displayData(data);
});
