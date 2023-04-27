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
    document.getElementsByName('largura')="";
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

