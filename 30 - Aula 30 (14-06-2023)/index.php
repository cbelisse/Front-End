<?php
//Iniciando o uso de sessões
session_start();
include_once "conectar.php"; //puxando informações do conectar.php
if (isset($_POST['login'])){
    //Tratando e limpando os dados para enviar para o BD
    $usuario=mysqli_escape_string($conecta,$_POST['user']);
    $senha=md5(mysqli_escape_string($conecta,$_POST['pass']));
    //Query que vai fazer a Leitura do BD
    $leitura="SELECT * FROM sistema WHERE usuario='$usuario' AND senha='$senha'";
    //Guarda o resultado da consulta
    $res=mysqli_query($conecta, $leitura);
    //Criando array com as informações consultadas
    $dados=mysqli_fetch_array($res);
    //Criando as sessões
    $_SESSION['usuario']=$dados['usuario'];
    $_SESSION['senha']=$dados['senha'];
    $_SESSION['nome']=$dados['nome'];
    header('Location: pagina1.php');
   /* echo "<br>".$dados['senha'];
    echo "<br>".$dados['senha'];*/
}
else{
    echo "Erro na consulta";
}
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Aula Revisão PHP</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/estilo.css">
    </head>

    <body class="telaLogin">
        <div class="login">
            <fieldset>
                <form action="" method="POST">
                    <h3>Sistema de Login</h3>
                    <label for="">Usuário:</label><br>
                    <input type="text" name="user" id=""><br>
                    <label for="">Senha:</label><br>
                    <input type="password" name="pass" id=""><br>
                    <input type="submit" value="LOGIN" class="btn" name="login">
                </form>
                <hr>
                <a href="cadastrar.php">Cadastre-se</a><br>
                <a href="alterar.php">Altere seus dados</a>
                
            </fieldset>
        </div>
    </body>
</html>



