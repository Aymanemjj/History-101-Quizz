/* Questions list */

const questionsList = {
    Questions: [
    {question: "When did WW2 start", options: ["1981", "1913", "1939","1940"], answer:"1939"},
    {question: "Who gifted the statue of liberty to the USA ", options: ["England", "France", "Germany","Spain"], answer:"France"},
    {question: "When was Napoleon Bonaparte crowned emperor of the french", options: ["1804","1802","1803", "1805"], answer:"1804"},
    {question: "When did WW1 end", options: ["1912","1914","1918","1916"], answer:"1918"},
    {question: "How was socrates executed", options: ["Crucifixion", "Poison", "Firing squad", "Decapitation"], answer:"Poison"}
]
}




let answers = 0;
let i = 0; 
const nextbt = document.getElementById("b2");
const backbt = document.getElementById("b1");



    nextbt.onclick = function(){
        answerV();
        
        if(i< questionsList.Questions.length - 1) {
             i++
        }
        nextQuestion(i);       
    };

    function nextQuestion(i){
        


    document.getElementById("question").innerHTML = questionsList.Questions[i].question;
        
        let j;
        for(j = 0; j < 4; j++){
            document.getElementById("quizz-option-"+ j ).innerHTML = questionsList.Questions[i].options[j];
        }
        console.log('i =',i);
        
       
        if(i == questionsList.Questions.length - 1 ){
                document.getElementById("b2").className = "fa-solid fa-circle-check fa-2xl";
                nextbt.onclick = location.href="score.html";
        }
        if( i == 1 ){
            document.getElementById("b1").style.visibility ="visible";
        }


        ["quizz-check-0", "quizz-check-1", "quizz-check-2", "quizz-check-3"].forEach(function(id) {
            document.getElementById(id).checked = false;
        });
        
       
    }






    backbt.onclick = function(){
       if(answers != 0){
        answers--;
       }
       console.log("answers=",answers);
       
        
        if(i>0) {
             i--;
        }
        previousQuestion(i);
        
    };

    function previousQuestion(i){

    document.getElementById("question").innerHTML = questionsList.Questions[i].question;
        
        let j;
        for(j = 0; j < 4; j++){
            document.getElementById("quizz-option-"+ j ).innerHTML = questionsList.Questions[i].options[j];
        }
        console.log('i =',i);

        if(i == questionsList.Questions.length - 2){

            document.getElementById("b2").className = "fa-solid fa-square-caret-right fa-2xl";

        }
        if( i == 0 ){
            document.getElementById("b1").style.visibility ="hidden";
        }

    

        ["quizz-check-0", "quizz-check-1", "quizz-check-2", "quizz-check-3"].forEach(function(id) {
            document.getElementById(id).checked = false;
        });
        

    }

   function answerV(){
        ["quizz-check-0", "quizz-check-1", "quizz-check-2", "quizz-check-3"].forEach(function(id) {
            if(document.getElementById(id).checked === true){
                if(document.getElementById(id).nextElementSibling.innerHTML == questionsList.Questions[i].answer){
                    answers++;
                }
            }
        });
        console.log("answers=",answers);
         document.getElementById("score-value").innerHTML = answers,"/5";
    }