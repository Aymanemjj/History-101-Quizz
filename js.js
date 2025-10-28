/* Questions list */

const questoinsList = {
    Questions: [
    {question: "When did WW2 start", options: ["1981", "1913", "1939","1940"], answer:"1939"},
    {question: "Who gifted the statue of liberty to the USA ", options: ["England", "France", "Germany","Spain"], answer:"France"},
    {question: "When was Napoleon Bonaparte crowned emperor of the french", options: ["1804","1802","1803", "1805"], answer:"1804"},
    {question: "When did WW1 end", options: ["1912","1914","1918","1916"], answer:"1918"},
    {question: "How was socrates executed", options: ["Crucifixion", "Poison", "Firing squad", "Decapitation"], answer:"poison"}
]
}




let answers = [];
let x = "";
let i = 0; 

if(i < 5){
    document.getElementById("b2").onclick = function(){

        nextQuestion(i++)
    };

    function nextQuestion(i){

    document.getElementById("question").innerHTML = questoinsList.Questions[i].question;
        
        let j;
        for(j = 0; j < 4; j++){
            document.getElementById("quizz-option-"+ j ).innerHTML = questoinsList.Questions[i].options[j];
        }
        console.log(i)  ;
        if( i == 0 ){
            document.getElementById("b1").style.visibility ="visible";
        }

    document.getElementById("b2").addEventListener('click', function () {
        ["quizz-check-0", "quizz-check-1", "quizz-check-2", "quizz-check-3"].forEach(function(id) {
            document.getElementById(id).checked = false;
        });
        })

    }

}