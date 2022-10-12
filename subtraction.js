const num1 = Math.ceil(Math.random()*10);
const num2 = num1 + (Math.ceil(Math.random() * 10));
correctAns = num2 - num1

const questionEl = document.getElementById('question')
const scoreEl = document.getElementById('score')
const inputEl = document.getElementById('input')

questionEl.innerText = `what is ${num2} minus ${num1}?`

if(window.localStorage.getItem('subScore')== undefined){
    window.localStorage.setItem('subScore', '0')
}

function checkSubtraction(){
    document.getElementById('form').addEventListener('submit', ()=>{
        const userAns = +inputEl.value;
        if (userAns == correctAns){
            let score = Number(window.localStorage.getItem('subScore'))
            score += 1;
            window.localStorage.setItem('subScore', JSON.stringify(score))
        }else{
            let score = Number(window.localStorage.getItem('subScore'))
            score -= 1;
            window.localStorage.setItem('subScore', JSON.stringify(score))
        }
    })
}
function reset(){
    document.getElementById('form').addEventListener('reset', ()=>{
        window.localStorage.setItem('subScore', '0');
    });
    
}

scoreEl.innerText = `score: ${window.localStorage.getItem('subScore')}`