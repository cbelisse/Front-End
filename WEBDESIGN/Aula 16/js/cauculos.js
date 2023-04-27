//Exemplo 1 de funçao sem variavel e com parametro
//criando a funçao calculararea

function calcularArea(x){
    window.alert("Area Total"+(parseInt(x)*parseInt(x)));
}

//exemplo 2 funçao com variaveis e Parametros
var larg=0;
var alt=0;
var prof=0;
var volume=0;
//atribuindo valores recebidos as variaveis
function calcularVol(l,a,p){
    larg=parseInt(l);
    alt=parseInt(a);
    prof=parseInt(p);
    //metodo para calcular o volume
    volume=larg*alt*prof;
    //devolver o resultado pro usuario
    window.alert("Volume total:"+volume);
}
//exemplo 3 funcao calculadora
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