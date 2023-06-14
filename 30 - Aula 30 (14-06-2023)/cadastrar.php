<?php
include_once "conectar.php"; //chave para abrir o banco
if(isset($_POST['cadastro'])){
    //filtrando os valores recebidos do form para enviar para o BD
    $user=mysqli_escape_string($conecta,$_POST['user']);
    $pass=md5(mysqli_escape_string($conecta,$_POST['pass']));
    $nome=mysqli_escape_string($conecta,$_POST['nome']);
    //query que permite cadastrar os dados no BD;
    $criar="INSERT INTO sistema (usuario, senha, nome) VALUES('$user','$pass','$nome')";
    //verificando se os dados forma cadastrados
    if (mysqli_query($conecta, $criar)){
        echo "Dados Cadastrados com Sucesso!!!";
        header('Location: index.php');
    }
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
                    <h3>Sistema de Cadastro de Usuário</h3>
                    <label for="">Usuário:</label><br>
                    <input type="text" name="user" id=""><br>
                    <label for="">Senha:</label><br>
                    <input type="password" name="pass" id=""><br>
                    <label for="">Nome:</label><br>
                    <input type="text" name="nome" id=""><br>
                    <input type="submit" value="CADASTRAR" class="btn" name="cadastro">
                </form>
                <hr>
                <a href="index.php">VOLTAR</a><br>
            </fieldset>
        </div>
    </body>
</html>

