const quesDb=[
    {
        question:"Q 1 - What is JavaScript?",

        a:"JavaScript is a scripting language used to make the website interactive",
        b:"JavaScript is an assembly language used to make the website interactive",
        c:"JavaScript is a compiled language used to make the website interactive",
        d:"None of the mentioned",
        ans:"ans1"
    },
    {
        question:"Q 2 - How can you get the type of arguments passed to a function?",

        a:" using typeof operator",
        b:"using getType function",
        c:"Both of the above",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q 3 - Which built-in method returns the character at the specified index?",

        a:" characterAt()",
        b:"getCharAt()",
        c:"charAt()",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q 4 - Which built-in method sorts the elements of an array?",

        a:" changeOrder(order)",
        b:" order()",
        c:"sort()",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q 5 - Which of the following function of Number object returns a string value version of the current number?",

        a:" toString()",
        b:" toFixed()",
        c:"toLocaleString()",
        d:" toPrecision()",
        ans:"ans1"
    }
]
const question=document.querySelector("#question")
const option1=document.querySelector("#option1")
const option2=document.querySelector("#option2")
const option3=document.querySelector("#option3")
const option4=document.querySelector("#option4")
const submit=document.querySelector("#submit")
const answers=document.querySelectorAll(".answer")
const counter=document.querySelector(".counter")
const quiz_points=document.querySelector(".score")
const resultContainer=document.querySelector(".result")
quesCount=0
const loadQues = ()=>{
    const questionList=quesDb[quesCount]
    question.innerText=questionList.question
    option1.innerText=questionList.a
    option2.innerText=questionList.b
    option3.innerText=questionList.c
    option4.innerText=questionList.d
    counter.innerText=`Question ${quesCount+1} of 5 :`
}

loadQues();
const getCheckedAns=()=>{
    let answer;
    answers.forEach((currentAnsElement)=>{
        if(currentAnsElement.checked){
            answer=currentAnsElement.id
           
        }
    })
    return answer;

  
}
const uncheck=()=>{
    answers.forEach((radio)=>{
        if(radio.checked===true){
           radio.checked=false;
           
        }
    })
};
let score=0;
submit.addEventListener('click', ()=>{
   const checkedAns= getCheckedAns();
   quiz_points.innerText=`You Scored ${score} Out Of 5`
   if(checkedAns==quesDb[quesCount].ans){
    score=score+1;
   quiz_points.innerText=`You Scored ${score} Out Of 5`
   }
   quesCount++
   if(quesCount<quesDb.length){
    uncheck()
     loadQues()

   }
   else if(quesCount==quesDb.length){
    resultContainer.classList.remove("hidden")
    
   }
   
   
})
const exit=document.querySelector(".exit-button")
exit.addEventListener('click', ()=>{
    location.reload();
})


