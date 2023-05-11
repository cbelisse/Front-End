//Exemplo 1 de array
var ex1=["excel","web design","Arduino","Google cloud"];
function exemplo1(){
    window.alert("Valores do meu vetor:"+ex1);
    window.alert("Tamanho do vetor:"+ex1.length);
    window.alert("posiçao numero 3:"+ex1[3]);
    window.alert("Novo valor: Redes"+ex1.push("Redes"));
    window.alert("Tamanho do vetor:"+ex1.length);
    window.alert("Valores do meu vetor:"+ex1);
}
//exemplo 2 de array vazio com laço
var ex2=[];
function enviar(v){
    var i=1;      //variavel inicializadora
    do{
        ex2.push(window.prompt("Digite um nome:"));
        i++; //incremento da variavel inicializadora
    }
    while(i<=parseInt(v));
    window.alert("Nomes:"+ex2);
}
var n1=0;
function verNome(n){
    n1=parseInt(n)-1;
    if(n=="" || n1==-1 || n1>=ex2.length ){
        document.getElementById('nome').value="Dado não cadastrado."
    }
    else{
    document.getElementById('nome').value=ex2[n1];
    }
}
//Criando objetos em JS
var obj={
    nome:"chewbaca",
    idade:45 + " anos",
    local:"Via Lactea",
    estado:true,
    casado:false,
};

function objeto(){
    window.alert("Bem vindo " + obj.nome + ", morador da " + obj.local);
    window.alert("Sua idade é essa mesmo ? " + obj['idade']);
    window.alert("Você é casado: " + obj.casado);
}
//Objeto 2 recebendo valores do usuário
var curso={
    nome:"",
    tipo:"",
    qtd:0,
    valor:0.0
};
function cadastrar(n,t,q,v){
    curso.nome=n;
    curso.tipo=t;
    curso.qtd=parseInt(q);
    curso.valor=parseFloat(v);

    window.alert("Dados Cadastrados");
    window.alert("O curso " + curso.nome + " é da área de " + curso.tipo + " tem " + curso.qtd + " inscritos e custa " + curso.valor)
    //vamos apagar as informações na tela após cadastrar
    document.getElementsByTagName('curso').reset();
    document.getElementsByTagName('tipo').reset();
    document.getElementsByTagName('qtd').reset();
    document.getElementsByTagName('valor').reset();

}
