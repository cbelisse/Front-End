//variável do array

var pessoa=["ximbinha", "M", 59];

function vetor1(){
    window.alert("Dados da pessoa: " + pessoa);
    window.alert("QTD de dados do Array: "+pessoa.length);
    window.alert("Nome da pessoa: " + pessoa[0]);
}

var cores=[];

function vetor2(){
    //Laço for
    for(var i=0; i<=3; i++){
        cores.push(window.prompt("Digite o nome de uma cor: "));
    }
    window.alert("Todas as cor escolhidas: "+cores);
}

var frutas = [];
    function vetor3(qtd){
        for(var i=0; i<=parseInt(qtd); i++){
            frutas.unshift(window.prompt("Digite o nome de uma fruta: "))
            //unshift() insere no começo do vetor.
        }
        window.alert("Frutas do seu carrinho: "+frutas);
    }

    var nome;
    var op=0;
    var fila=[];

    function atendimento(n,o){
        nome=n;
        op=parseInt(o);
        //Lógica condicional para determinar a prioridade
        switch(op){
            case 1:
                fila.unshift(nome);
            break;
            case 2:
                fila.push(nome);
            break;
        }
        window.alert("Usuários na fila: "+fila.length);
    }

    function pessoaVez(){
        window.alert("Próximo atendimento: "+fila[0])
    }

    var vetor=[];

    function lista(n,q){
        var nome=n;
        var i=1
        var qtd=parseInt(q);
        vetor.push(nome);
        while(i<qtd){
            vetor.push(window.prompt("Informe outro nome: "));
            i++;
        }
        window.alert("Nomes da lista: "+ vetor);
    }
    function primeiro(){
        vetor.shift();
        window.alert("Nomes da lista: "+vetor);
    }
    function ultimo(){
        vetor.pop();
        window.alert("Nomes da lista: "+vetor);
    }