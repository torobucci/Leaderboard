export const fetchData =async()=>{
    return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fj3zDMpuONTrt39r2iNM/scores/')
    .then(response => response.json())
 }
 export const postScore =async(user,score)=>{
 fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fj3zDMpuONTrt39r2iNM/scores/', {
   method: 'POST',
   body: JSON.stringify({
   "user": user,
     "score":score
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
 })
 }