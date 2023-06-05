<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 2 - PHP_ROUND_HALF_EVEN</title>
</head>
<body>
    <?php
    echo "<h1>Aula 2 de PHP </h1>";
    //variável global
    $valor1=1;
    $valor2=10.0;
    $nome="Cleber";
    echo"<h2> Incrementos</h2>";
    echo "Soma do valor 1 e do valor 2: " .($valor1+$valor2);
    echo "<br>";
    //Incremento
    $valor1=$valor1+10;
    echo"Incremento do valor 1: " .$valor1;
    echo "<br>";
    $valor1+=19;
    echo"Novo incremento do valor 1: " .$valor1;
    echo"<br>";
    $valor1=5;
    echo"Novo valor 1: " .$valor1;
    echo"<br>";
    $valor1++;
    echo"Incremento ++ do valor 1: " .$valor1;
    echo "<br>";
    echo"<h2> Decrementos</h2>";
    $valor2=$valor2-8;
    echo"Decremento do valor 2: " .$valor2;
    echo "<br>";
    $valor2-=5;
    echo"Novo Decremento do valor 2: " .$valor2;
    echo "<br>";
    $valor2--;
    echo"Decremento -- do valor 2: " .$valor2;
    echo "<br>";
    //Lógica condicional simples
    echo"<h2>Dia da Semana </h2>";
    $dia=9;
    if($dia==1){
        echo "Segunda-Feira"; //resposta verdadeira
    }
    else if($dia==2){
        echo "Terça-Feira";
    }
    else if($dia==3){
        echo "Quarta-Feira";
    }
    else if($dia==4){
        echo "Quinta-Feira";
    }
    else if($dia==5){
        echo "Sexta-Feira";
    }
    else if($dia==6){
        echo "Sábado";
    }
    else if($dia==7){
        echo "Domingo";
    }
    else{
        echo"Esse dia não existe."; //resposta falsa
    }
    //Lógica condicional switch case
    echo"<h2>Qual o mês ? </h2>";
    $mes=13;
    switch($mes){
        case 1:
            echo"Janeiro"; //resposta verdadeira 1
        break;
        case 2:
            echo"Fevereiro"; //resposta verdadeira 1
        break;
        case 3:
            echo"Março"; //resposta verdadeira 1
        break;
        case 4:
            echo"Abril"; //resposta verdadeira 1
        break;
        case 5:
            echo"Maio"; //resposta verdadeira 1
        break;
        case 6:
            echo"Junho"; //resposta verdadeira 1
        break;
        case 7:
            echo"Julho"; //resposta verdadeira 1
        break;
        case 8:
            echo"Agosto"; //resposta verdadeira 1
        break;
        case 9:
            echo"Setembro"; //resposta verdadeira 1
        break;
        case 10:
            echo"Outubro"; //resposta verdadeira 1
        break;
        case 11:
            echo"Novembro"; //resposta verdadeira 1
        break;
        case 12:
            echo"Dezembro"; //resposta verdadeira 1
        break;
        default:
        echo"Mês Inválido"; //resposta falsa
        break;
    }
    echo"<br>";
    //Lógica condicional tabela E (And &&)
    echo"<h2>Validando Login e Senha.</h2>";
    $usuario="senai";
    $senha="Senai123";
    if($usuario=="senai" && $senha=="Senai123"){
        echo"Entrada Autorizada";
    }
    else if($usuario=="senai" && $senha!="Senai123"){
        echo"Entrada Não Autorizada !!! Senha Incorreta";
    }
    else if($usuario!="senai" && $senha=="Senai123"){
        echo"Entrada Não Autorizada !!! Usuário incorreto";
    }
    else{
        echo"Entrada não autorizada !!! Usuário e Senha Incorretos";
    }
    //Lógica condicional Tabela OU (or ||)
    echo"<h2>Processo Seletivo</h2>";
    $ensino="superio";
    $ingles="fluent";
    if($ensino=="superior" and $ingles=="fluente"){
        echo"Contratado. Parabéns !!!";
    }
    else if($ensino=="superior" or $ingles=="fluente"){
        echo"Parabéns!! Você está na próxima fase";
    }
    else{
        echo"Infelizmente não foi dessa vez. Tente de novo e vai estudar!!!";
    }
    //Laços - FOR
    echo"<h2>Laços FOR</h2>";
    $i=0;
    for($i; $i<10; $i++){
        echo"<br>Valor do i: " .$i;
    }
    echo"<br>Fim do laço FOR";
    //Laços - While
    echo"<h2>Laços WHILE</h2>";
    $j=1; //Variável inicializadora
    while ($j<=5){
        echo"<br>O valor de J é: " .$j;
        $j++;
    }
    echo"<br>Fim do laço do WHILE";
    //Laço - do While
    echo"<h2>Laço - Do While</h2>";
    $x=1;
    do{
        echo"<br> Valor do X: " .$x;
        $x++;
    }
    while($x<=5);
        echo"<br>Fim do laço DO WHILE";
    //Funções em PHP
    echo"<h2>Funções</h2>";
    $area=5;
    function calcArea(){
        global $area;
        echo"<br>Area Total: " .(pow($area,2));
        echo"<br>Raiz Total: " .(sqrt($area));
        echo"<br>Seno da Area: " .(sin($area));
        echo"<br>Valor do Pi: " .pi();
    }
    echo calcArea();

    //Função ser argumento
   echo"Usando Função sem Argumento.";
   function volume($l,$a,$p){
        $vol=$l*$a*$p;
        echo"<br>Volume cm³: " .$vol;
    }
    echo volume(10,5,30);
?>
<fieldset>
    <h2>Calculadora</h2>
    <form action="" method="POST">
        <label for="">Valor 1:</label>
        <input type="number" name="v1" id="">
        <br>
        <label for="">Valor 2:</label>
        <input type="number" name="v2" id="">
        <br>
        <input type="submit" value="Calcular">
        <?php
        function somar(){
            echo"Total da soma: ".($_POST['v1']+$_POST['v2']);
        }     
        echo somar();        
        ?>    
    </form>
</fieldset>
</body>
</html>