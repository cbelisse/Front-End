<?php
date_default_timezone_set('America/Sao_Paulo');
$data=date('d/m/Y'); //Atenção para maiúsculo e minúsculo
$hora=date('H:i'); //Atenção para maiúsculo e minúsculo
    if(isset($_POST['calcular'])){
        $alc=$_POST['alc'];
        $gas=$_POST['gas'];
        $comb=$alc/$gas;
        if($comb>=0.7){
            echo"<br>Opção: <input type='text' value='GASOLINA'>";
        }
        else{
            echo"<br>Opção: <input type='text' value='ALCOOL'>";
        }
        echo"<br>".$data;
        echo"<br>".$hora;
    }
    //Esse Else é pra deixar um campo Opção e input antes de fazermos a conta.
    else{
        echo"<br>Opção: <input type='text' value''>";
        
    }
?>