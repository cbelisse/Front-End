<?php
session_start();    //instrução que permite trabalhar com sessões
echo "<body bgcolor='blue'>"
?>
<?php
if(!isset($_SESSION['usuario']) AND !isset($_SESSION['senha'])){
header('Location:index.php');
}
else{
    echo "Bem vindo, Sr(A).".$_SESSION['nome'];
    echo "<br> Usuário:".$_SESSION['usuario'];
}
//echo "<br> Senha:".base64_decode($senha); criptografia base64 decodificando senha
echo "<br><a href='pagina2.php'>Pagina 2</a>";
echo "<br><a href='destruir.php'>Sair</a>";
?>
<?php
echo "</body>";
?>