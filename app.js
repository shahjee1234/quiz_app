//Login Functionality
function validate() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userId").value;
    if(a !== "" && b === "90283e9a"){
        window.location.href = "quiz.html";
        return false;
    }else{
        if(a === ""){
            document.getElementById("userName").style.borderColor = "red";
            return false;
        }else if
            (b !== "90283e9a"){
            document.getElementById("userName").style.borderColor = "black";
            document.getElementById("userId").style.borderColor = "red";
            return false;
            }
        
    }
}
//Login Functionality

//Quiz Funcitonality

//constructor function for creating question object
function newQuestion(question,answers,userAnswer,correctAnswer){
    this.question = question;
    this.answers = answers;
    this.userAnswer = userAnswer;
    this.correctAnswer = correctAnswer;
}
//constructor function for creating question object

//question objects
var question1 = new newQuestion(
    "HTML stands for ?",
    ["Hyper Text Mark Up Language","Hyper Text MakeUp Language","Hybrid Text Markup Language"],
    "",
    "Hyper Text Mark Up Language"
);
var question2 = new newQuestion(
    "CSS stands for ?",
    ["Central Superier Services","Cascading Style Sheet","Coperative Style Sheet"],
    "",
    "Cascading Style Sheet"
);
var question3 = new newQuestion(
    "What Is Abbreviation Of DOM ?",
    ["Document Object Model","Document Object Mode","Document Object Markup"],
    "",
    "Document Object Model"
);
var question4 = new newQuestion(
    "How can we define function in js",
    ["new function()","function{}","function (){}"],
    "",
    "function (){}"
);
var question5 = new newQuestion(
    "Which keyword is used to stop loop ?",
    ["break;","Stop Loop","End"],
    "",
    "break;"
);
//question objects

//All Questions Array
var allQuestions = [question1,question2,question3,question4,question5];
//All Questions Array

//scoring
var score = 0;
//scoring

//declaring count 
var i = 0;
//declaring count 

//question no
var q = 1;
//question no

//First Screen
document.getElementById("quiz-head").innerHTML = "Question No." + q;
document.getElementById("questionBox").innerHTML = allQuestions[i].question;
document.getElementById("option1").innerHTML = allQuestions[i].answers[0];
document.getElementById("option2").innerHTML = allQuestions[i].answers[1];
document.getElementById("option3").innerHTML = allQuestions[i].answers[2];
//First Screen

//onclick function for next button
function next(){
    
    checkScore();

    if (i<allQuestions.length-1){
        
            i++;
            q++;
            document.getElementById("quiz-head").innerHTML = "Question No." + q;
            document.getElementById("questionBox").innerHTML = allQuestions[i].question;
            document.getElementById("option1").innerHTML = allQuestions[i].answers[0];
            document.getElementById("option2").innerHTML = allQuestions[i].answers[1];
            document.getElementById("option3").innerHTML = allQuestions[i].answers[2];
            
        }
    else {
            result();
    }
    }

//onclick function for next button

//function For Scoring
function checkScore(){
    if(document.getElementById('example1').checked === true){
        var a = document.getElementById("option1").innerHTML;
        var b = allQuestions[i].correctAnswer;
            if(a === b){
                score = score + 20;
            }else{
                score = score;
            }
    }

    else if(document.getElementById('example2').checked === true){
        var a = document.getElementById("option2").innerHTML;
        var b = allQuestions[i].correctAnswer;
            if(a === b){
                score = score + 20;
            }else{
                score = score;
            }
    }

    else if(document.getElementById('example3').checked === true){
        var a = document.getElementById("option3").innerHTML;
        var b = allQuestions[i].correctAnswer;
            if(a === b){
                score = score + 20;
            }else{
                score = score;
            }
    }
    
}
//function For Scoring

//Quiz Funcitonality

//result functionality 

function result(){
document.getElementById("quizman").innerHTML="";
document.getElementById("quizman").style.border= "white";
document.getElementById("resultHead").innerHTML = "Your Score Is :";
document.getElementById("resultText").innerHTML = score;

}



//result functionality 
