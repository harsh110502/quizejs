const startbtn=document.querySelector(".start-btn");
const welcomeScreen = document.querySelector(".welcome-screen");
const quizeScreen=document.querySelector(".quize-screen");
const answersContainer=document.querySelector(".ans-container");
const questionEl=document.querySelector(".que");
const nextBtn=document.querySelector(".next-btn");
let currentQuestionIdx=0;
let userScore=0;

const question=[
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "High-Level Textual Markup Language", correct: false },
            { text: "Hypertext Management Language", correct: false },
        ],
    },

    {
        question: "What is the purpose of CSS?",
        answers: [
            { text: "Customer Service Software", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Centralized Style System", correct: false },
            { text: "Computer Style Software", correct: false },
        ],
    },
    {
        question: "Explain the term 'Responsive Design' in web development.",
        answers: [
            { text: "Designing for all devices", correct: true },
            { text: "Designing only for desktop", correct: false },
            { text: "Designing for print media", correct: false },
            { text: "Designing for audio devices", correct: false },
        ],
    },

    {
        question: "What is the purpose of the 'alt' attribute in HTML?",
        answers: [
            { text: "Alternative text for images", correct: true },
            { text: "Alignment of text", correct: false },
            { text: "Attribute list", correct: false },
            { text: "Animation control", correct: false },
        ],
    },
    {
        question: "Define 'API' in the context of web development.",
        answers: [
            { text: "Automated Programming Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Protocol Interface", correct: false },
            { text: "Automated Protocol Integration", correct: false },
        ],
    },
];



startbtn.addEventListener("click", startquize);

function startquize(){
    welcomeScreen.style.display="none";
    quizeScreen.style.display="flex";
    currentQuestionIdx=0;
    userScore=0;
    nextBtn.innerHTML = "NEXT";
    nextBtn.style.display='none';
    nextBtn.style.display = "none";
    displayquestion();
}

function displayquestion(){
    resetContainer();
    questionEl.textContent=question[currentQuestionIdx].question;
    question[currentQuestionIdx].answers.forEach(answers => {
        const buttonEl=document.createElement('button');
        buttonEl.innerHTML=answers.text;
        buttonEl.classList.add("ans-btn");
        answersContainer.append(buttonEl);

        if(answers.correct){
            buttonEl.dataset.correctAns=answers.correct;

        }
        // console.log(buttonEl);

        buttonEl.addEventListener('click',checkanswer);
    });
}

function checkanswer(e){
    const selectedButton=e.target;
    if(selectedButton.dataset.correctAns){
        userScore++;
        console.log(userScore);
        selectedButton.classList.add('correct-ans');
    }else{
        selectedButton.classList.add("worng-ans");
    }
    Array.from(answersContainer.children).forEach(button=>{
        if(button.dataset.correctAns==='true'){
            button.classList.add("correct-ans");
        }
        button.disabled=true;
        nextBtn.style.display='block';
    });
} 


// function dislplayResult(){
//     resetContainer();
//     answersContainer.innerHTML=`Quiz is Complated <br>Your Score:
//     <span class="score">${userScore}/${question.length}</span>`;
// }   
function restartQuize(){

}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${question.length}</span>`;

    nextBtn.innerHTML = "Restart Quiz";
    
}   

function nextQuestion(){
    currentQuestionIdx++;
    if(currentQuestionIdx<question.length){
        displayquestion();
        nextBtn.style.display='none';
    }else{
        displayResult();
    }
}
nextBtn.addEventListener('click',function(){
    if(currentQuestionIdx<question.length){
        nextQuestion();
    }else{
        startquize();
    }
});

function resetContainer() {
    question.textContent=" ";
    answersContainer.innerHTML=" ";
}   

