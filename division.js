const num1 = Math.ceil(Math.random()*10);
const num2 = num1 * Math.ceil(Math.random()*10);
const inputElement = document.getElementById('input')
const questionElement = document.getElementById('question')
const scoreElement = document.getElementById('score');

questionElement.innerText= `what is ${num2} divided by ${num1}?`

if(window.localStorage.getItem('divScore') == null){
    window.localStorage.setItem('divScore', '0')
}
const userAns = +inputElement.value;
function checkDivision(){
    if (userAns === (num2/num1)){
        let score = Number(window.localStorage.getItem('divScore'))
        score -= 1;
        window.localStorage.setItem('divScore', score);
    }else{
        let score = Number(window.localStorage.getItem('divScore'))
        score += 1;
        window.localStorage.setItem('divScore', score);
    }
}

scoreElement.innerText=`score: ${Number(window.localStorage.getItem('divScore'))}`