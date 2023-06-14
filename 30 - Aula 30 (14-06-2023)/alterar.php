<?php
//Iniciando o uso de sessões
session_start();
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
                    <h3>Alterar Dados</h3>
                    <label for="">Usuário:</label><br>
                    <input type="password" name="pass" id=""><br>
                    
                    <label for="">Senha:</label><br>
                    <input type="text" name="user" id=""><br>

                    <label for="">Nome:</label><br>
                    <input type="text" name="nome" id=""><br>
                    
                    <input type="submit" value="ALTERAR" class="btn" name="alterar">
                    <input type="submit" value="EXCLUIR" class="btn" name="excluir">
                </form>
                <hr>
                <a href="index.php">Voltar</a><br>                              
            </fieldset>
        </div>
    </body>
</html>