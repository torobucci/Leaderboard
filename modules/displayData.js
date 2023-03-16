const displayData = (data) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  data.result.sort((a, b) => b.score - a.score);
  data.result.forEach((data, i) => {
    const newScore = document.createElement('li');
    newScore.textContent = `${i + 1} ${data.user} : ${data.score}`;
    scores.appendChild(newScore);
  });
};
module.exports = displayData;