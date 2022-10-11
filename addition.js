const a = Math.ceil(Math.random()*10)
const b = Math.ceil(Math.random()*10)
const correctAnswer = a + b;
const questionEl = document.getElementById('question')
const scoreEl = document.getElementById('score')
const inputEl = document.getElementById('input')
questionEl.innerText = `what is ${a} plus ${b}`
if(window.localStorage.getItem('scoreAdd')== undefined){
    window.localStorage.setItem('scoreAdd', '0');
}

function checkAddition(){
    document.getElementById('form').addEventListener('submit', ()=>{
        const userAnswer = +inputEl.value;
        if(userAnswer==correctAnswer){
            let scores = Number(window.localStorage.getItem('scoreAdd'))
            scores += 1;
            window.localStorage.setItem('scoreAdd', JSON.stringify(scores))
        }else{
            let scores = Number(window.localStorage.getItem('scoreAdd'))
            scores -= 1;
            window.localStorage.setItem('scoreAdd', JSON.stringify(scores))
        }
    });
   
}
scoreEl.innerText = `score: ${window.localStorage.getItem('scoreAdd')}`