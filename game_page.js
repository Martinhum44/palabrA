player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Turno para preguntar-"+player1_name;
document.getElementById("player_answer").innerHTML = "Turno para responder-"+player2_name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("palabra en minusculas = " + word);
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthdivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthdivide2);
    console.log(charAt2);

    lengthmenos1 = word.length-1;
    charAt3 = word.charAt(lengthmenos1);
    console.log(charAt3);

    removecharat1 = word.replace(charAt1,"_");
    removecharat2 = removecharat1.replace(charAt2,"_");
    removecharat3 = removecharat2.replace(charAt3,"_");
    console.log(removecharat3);

    questionword = "<h4 id='word_display'> Q."+removecharat3+"</h4>";
    inputbox = "<br> respuesta: <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>comprobar</button>";
    row = questionword + inputbox + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var questionturn = "player1";
var answerturn = "player2";

function check(){
    getanswer = document.getElementById("input_checkbox").value;
    answer = getanswer.toLowerCase();
    console.log("respuesta en minusculas = "+answer);
    if (answer == word){
        if (answerturn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (questionturn == "player1"){
        questionturn = "player2";
        document.getElementById("player_question").innerHTML = "turno para preguntar- "+player2_name;
    }
    else{
        questionturn = "player1";
        document.getElementById("player_question").innerHTML = "turno para preguntar- "+player1_name;
    }
    if (answerturn == "player1"){
        answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "turno para responder- "+player2_name;
    }
    else{
        answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "turno para responder- "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}