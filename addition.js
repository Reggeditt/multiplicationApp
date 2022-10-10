const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAns = num1 + num2;
const inputElement = document.getElementById('input')
const questionElement = document.getElementById('question')
const scoreElement = document.getElementById('score');
const debugEl = document.getElementById('debugger')

questionElement.innerText= `what is ${num2} plus ${num1}?`

if(window.localStorage.getItem('addScore') == null){
    window.localStorage.setItem('addScore', '0')
}

const userAns = +inputElement.value;
function checkAddition(){
    if (userAns == correctAns){
        debugEl.innerText = `My debugger says sth`
        let score = Number(window.localStorage.getItem('addScore'))
        score += 1;
        window.localStorage.setItem('addScore', JSON.stringify(score));
    }else if(!userAns==correctAns){
        let score = Number(window.localStorage.getItem('addScore'))
        score -= 1;
        window.localStorage.setItem('addScore', JSON.stringify(score));
    }
}

scoreElement.innerText= `score: ${Number(window.localStorage.getItem('addScore'))}`