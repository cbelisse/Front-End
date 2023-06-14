<?php
session_start();    //instrução que permite trabalhar com sessões

if(!isset($_SESSION['usuario']) AND !isset($_SESSION['senha'])){
header('Location:index.php');
}
else{
    echo "Bem vindo, Sr(A).".$_SESSION['nome'];
    echo "<br> Usuário:".$_SESSION['usuario'];
}

//echo "<br> Senha:".base64_decode($senha); criptografia base64 decodificando senha
echo "<br><a href='pagina1.php'>Pagina 1</a>";
echo "<br><a href='destruir.php'>Sair</a>";

?>
<?php
echo "</body>";
?>