//Variável global
var letra;

function alfabeto(l){
    //variável local
    var resp; //Definindo variável como texto
    letra=l.toUpperCase(); //Convertendo para maiúcula
    switch(letra){
        case 'A':
            resp="Amor"
        break;
        case 'B':
            resp="Baixinho"
        break;
        case 'C':
            resp="Coração"
        break;
        case 'D':
            resp="Docinho"
        break;
        case 'E':
            resp="Escola"
        break;
        case 'F':
            resp="Feijão"
        break;
        default:
            resp="Essa letra não foi cadastrada"
    }
    document.getElementById('resposta').value=resp;
}

//
var valor;

function mesAno(m){
    var resp;
    valor=parseInt(m);
    switch(valor){
        case 1:
            resp="Janeiro"
            document.getElementById('ref').style.backgroundColor="yellow";
        break;
        case 2:
            resp="Fevereiro"
            document.getElementById('ref').style.backgroundColor="gray";
        break;
        case 3:
            resp="Março"
            document.getElementById('ref').style.backgroundColor="Black";
            document.getElementById('ref').style.color="white"
        break;
        case 4:
            resp="Abril"
            document.getElementById('ref').style.backgroundColor="Red";           
        break;
        case 5:
            resp="Maio"
            document.getElementById('ref').style.backgroundColor="Orange";           
        break;
        case 6:
            resp="Junho"
            document.getElementById('ref').style.backgroundColor="aqua";           
        break;
        case 7:
            resp="Julho"
            document.getElementById('ref').style.backgroundColor="lightblue";           
        break;
        case 8:
            resp="Agosto"
            document.getElementById('ref').style.backgroundColor="blue";
                   
        break;
        case 9:
            resp="Setembro"
            document.getElementById('ref').style.backgroundColor="hotpink";           
        break;
        case 10:
            resp="Outubro"
            document.getElementById('ref').style.backgroundColor="chartreuse";           
        break;
        case 11:
            resp="Novembro"
            document.getElementById('ref').style.backgroundColor="cornflowerblue";           
        break;
        case 12:
            resp="Dezembro"
            document.getElementById('ref').style.backgroundColor="darkolivegreen";
            document.getElementById('ref').style.color='white'         
        break;
        default:
            resp="Mês inválido !!!!"
        break;
    }
    document.getElementById('ref').value=resp;
}

var user;
var pass;
function login(u,s){
    user=u;
    pass=s;
    if(user=="senai" && pass=="Senai123"){
        window.alert("Entrada autorizada !!!!");
        window.location.assign("Página 2.html");
    }
    else if(user=="senai" && pass!="Senai123"){
        window.alert("Entrada Negada, senha inválida");
    }
    else if(user!="senai" && pass=="Senai123"){
        window.alert("Entrada Negada, usuário inválido");
    }
    else{
        window.alert("Entrada Negada!!!");
        }
    }
    