export const displayData =(data)=>{
    const scores = document.querySelector('.scores')
   scores.innerHTML=''
   data.result.sort((a,b)=>b.score-a.score)
   data.result.forEach(data=>{
     const newScore = document.createElement('li')
     newScore.textContent = `${data.user} : ${data.score}`
     scores.appendChild(newScore)
   })
}