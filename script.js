function resp1() {

    var resp1 = "Prazer em te conhecer "

    var nome = document.getElementById("nome").value;

    document.getElementById("resp1").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "incrivel"

    var vida = document.getElementById("vida").value;

    document.getElementById("resp2").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "Cada uma vê as pessoas do jeito que quiser. "

    document.getElementById("resp3").innerHTML = resp3;

}

function resp4() {

    var fruta = document.getElementById("fruta").value;

    var resp4 = "Eu como bot infelizmente não possso fabricar uma, mas posso te ensinar! "

    var resp5 ="Que pena você não gostar de bombas atômicas"

    var resp6 ="Não compreendi sua resposta, poderia repetir?"

    if (fruta == "S"||fruta == "s" || fruta == "sim" || fruta == "Sim"){

        document.getElementById("resp4").innerHTML = resp4;

    } else if (fruta == "N"|| fruta == "n" || fruta == "não"|| fruta == "Não") {

        document.getElementById("resp4").innerHTML = resp5;
       
      
        

    } else {

        document.getElementById("resp4").innerHTML = resp6;

    }

}


