const root=document.getElementById('root')
//leer json y pasarlo a js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    createHeader(data)
    createQuestion(data)
    
  })
//crear header h1
function createHeader(data){
  const h1= document.createElement('h1')
    const texth1= document.createTextNode(`${data.title}`)
    h1.appendChild(texth1)
    root.appendChild(h1)
}
function createQuestion(data){
  const p = document.createElement("p")
    const questions = data.questions[0];
    p.appendChild(p1)
    root.appendChild(p)
}