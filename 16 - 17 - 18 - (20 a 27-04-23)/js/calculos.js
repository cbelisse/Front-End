//Exemplo 1 de função sem variável e com parâmetro
//Criando a função
function calcularArea(x){
    window.alert("Area Total: " + (parseInt(x)*parseInt(x)));
}

//Exemplo 2 função com variaveis e parametros
var larg=0;
var alt=0;
var prof=0;
var volume=0;

function calcularVol (l,a,p){
    larg=parseInt(l);
    alt=parseInt(a);
    prof=parseInt(p);
    volume=larg*alt*prof; 
    window.alert("Volume total:"+volume);
}
//Método para calcular o volume
//Devolver o resultado para o usuário

//Exemplo 3 Funções calculadora
var valor1=0;
var valor2=0;
var res=0;

function somar(a,b){
    valor1=parseInt(a);
    valor2=parseInt(b);
    res=valor1+valor2;
    window.alert("Resultado:"+res);
}
function subtrair(a,b){
    valor1=parseInt(a);
    valor2=parseInt(b);
    res=valor1-valor2;
    window.alert("Resultado:"+res);
}
function multiplicar(a,b){
    valor1=parseInt(a);
    valor2=parseInt(b);
    res=valor1*valor2;
    window.alert("Resultado:"+res);
}
function dividir(a,b){
    valor1=parseInt(a);
    valor2=parseInt(b);
    res=valor1/valor2;
    window.alert("Resultado:"+res);
}

//Função que calcula o perímetro de uma caixa
//Instanciando variáveis
var altura = 0.0;
var largura = 0.0;
var per = 0.0;


function perimetro(a,l){
    //Atribuindo valores para as variáveis
    altura=parseFloat(a);
    largura=parseFloat(l);
    //Método para calcular o perímetro
    per = (2*altura) + (2*largura)
    //saída da resposta em popup
    //window.alert("Perímetro total: " + per);
    //Atribui o resultado de per ao elemento resPer criado no arquivo index
    document.getElementById('resPer').value=per;

}
//Criando uma função reset sem usar o input type="Reset"
function limpar(){
    document.getElementById('resPer').value="";
    //Para representar Vazio abrimos e fechamos aspas.
    document.getElementsById('altura').value="";
    document.getElementsByName('largura').value="";
}
//Manipulando CSS por JS 
function azul(){
    document.getElementById('cores').style.backgroundColor='blue';
    document.getElementById('cores').style.color="white"
}
function vermelho(){
    document.getElementById('cores').style.backgroundColor='red';
    document.getElementById('cores').style.color="white"
}
function amarelo(){
    document.getElementById('cores').style.backgroundColor='yellow';
    document.getElementById('cores').style.color="green"
}
function verde(){
    document.getElementById('cores').style.backgroundColor='green';
    document.getElementById('cores').style.color="white"
}

//Utilizando Lógica Condicional Simples - Exemplo 1
function logicasimples(x,y){
    if(parseInt(x)>parseInt(y)){
        document.getElementById('resposta').value="Valor 1 é maior que valor 2";
    }
    else{
        document.getElementById('resposta').value="Valor 1 é menor que valor 2";
    }
}
/*
Caso o resultado da relação alcool/gasolina seja maior ou igual a 0.7 (70%), é melhor abastecer com gasolina, se menor que 0.7 melhor abastecer com alcool.
*/
function comb(a,g){
    var alc = parseFloat(a);
    var gas = parseFloat(g);
    var resp = alc/gas;
    if(resp >= 0.7){
        document.getElementById('combustivel').value="Gasolina";
    }
    else{
        document.getElementById('combustivel').value="Alcool";
    }
}

/*Calculando a média do aluno, se a média final for maior ou igual a 7, então o aluno está APROVADO,
caso a média final seja maior ou igual a 5, então o aluno está de recuperação, mas caso contrário estará REPROVADO*/

//Variáveis Globais
var n1=0.0;
var n2=0.0;
var n3=0.0;
var n4=0.0;
var media=0.0;

function calcularmedia(a,b,c,d){
    var texto;
    n1 = parseFloat(a);
    n2 = parseFloat(b);
    n3 = parseFloat(c);
    n4 = parseFloat(d);
    media = (n1+n2+n3+n4)/4;

    
    if(media >= 7){
        texto = "APROVADO";
    }
    else if( media >= 5){
        texto = "RECUPERAÇÃO";
    }
    else{
        texto = "REPROVADO";
    }
    //Saída dos resultados
    document.getElementById('media').value=media;
    document.getElementById('resFinal').value=texto;  
}
/*Caso a lampada esteja apagada, o estado vai ser igual a 0 e a imagem da lampada será OKK.png, caso contrário o estado será igual a 1 e a imagem da lampada vai ser ON.png*/
var estado = 0;
//Quando não há cálculo a ser feito não precisamos passar valores para a função
function lampada(){
    if (estado==0){
        estado=1;
        document.getElementById('lamp').src='img/ON.png';
        document.getElementById('fundo').style.backgroundColor="rgb(0,255,255)";
    }
    else{
        estado=0;
        document.getElementById('lamp').src='img/OFF.png';
        document.getElementById('fundo').style.backgroundColor="rgb(0,0,0)";
    }
}    
/*Dias da semana */
var dia = 0;


function diaSemana(d){
    dia=parseInt(d);
    if (dia == 1){
        document.getElementById('semana').value="Domingo";
    }
    else if(dia==2){
        document.getElementById('semana').value="Segunda-Feira";
    }
    else if(dia==3){
        document.getElementById('semana').value="Terça-Feira";
    }
    else if(dia==4){
        document.getElementById('semana').value="Quarta-Feira";
    }
    else if(dia==5){
        document.getElementById('semana').value="Quinta-Feira";
    }
    else if(dia==6){
        document.getElementById('semana').value="Sexta-Feira";
    }
    else{
        document.getElementById('semana').value="Sábado";
    }
}