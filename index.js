const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAns = num1 * num2;


const inputElement = document.getElementById("input")
const question = document.getElementById("question")
const scoreDisplay = document.getElementById("score")
question.innerText=`what is ${num1} multiplied by ${num2}?`
if(Number(window.localStorage.getItem('score'))== null){
    window.localStorage.setItem('score', '0');
}
function game(){
    document.getElementById('form').addEventListener("submit", ()=>{
        const userAns = inputElement.value
        if(userAns == correctAns){
                        
            let score = Number(window.localStorage.getItem('score'));
            score+=1;
            window.localStorage.setItem('score', JSON.stringify(score));
            scoreDisplay.innerText = `score: ${score}`
        }else{
            let score = Number(window.localStorage.getItem('score'));
            score-= 1;
            window.localStorage.setItem('score', JSON.stringify(score));
            scoreDisplay.innerText = `score: ${score}`
        }
        
    }); 
}
scoreDisplay.innerText = `score = ${Number(window.localStorage.getItem('score'))}`;