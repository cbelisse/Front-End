<?php
//método de conexão com o banco de dados
$servidor='localhost';
$usuario='root'; //estamos usando root porque é teste.
$senha='';
$bd='banco';

//sistema de conexão usando a o objeto mysqli
$conecta=mysqli_connect($servidor, $usuario, $senha, $bd);

if($conecta){
    echo "Conectado com sucesso";
}
?>