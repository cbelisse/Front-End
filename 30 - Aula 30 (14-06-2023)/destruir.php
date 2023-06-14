<?php
session_start();    //iniciando a sessão
session_unset(); //limpa a sessão
session_destroy();  //destrói totalmente  a sessão

header('Location: index.php');

?>