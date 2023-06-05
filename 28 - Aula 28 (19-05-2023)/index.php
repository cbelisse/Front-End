    <?php
        include_once "php/topo.php";
        include_once "php/topo.php";
    ?>
    
    <!--Conteúdo-->
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Calculadora de IMC</h2>
                <fieldset>
                <form action="" method="GET">
                    <label for="">Peso:</label>
                    <input class="teste" type="float" name="peso" placeholder="KG">
                    <br>
                    <label for="">Altura:</label>
                    <input type="float" name="altura" placeholder="METROS">
                    <br>
                    <input type="submit" value="CALCULAR">
                    <input type="reset" value="LIMPAR">
                    <br>
                    
                    <?php
                        $peso=0.0;
                        $alt=0.0;
                                              
                        if(isset($_GET['peso']) and isset($_GET['altura'])){
                            $peso=$_GET['peso']; //Recuperando peso do formulário
                            $alt=$_GET['altura']; //Recuperando altura do formulário
                            $res=round($peso/(pow($alt,2)),2); //Função pow está colocando alt ao quadrado
                            echo"<label>IMC:</label><input type='float' value='".$res."'>";
                            if($res<18.5){
                                echo"<label>Situação:</label><input type='float' value='Abaixo do peso'>";
                            }
                            else if($res<=24.9){
                                echo"<label>Situação:</label><input type='float' value='Peso Normal'>";
                            }
                            else if($res<=29.9){
                                echo"<label>Situação:</label><input type='float' value='Sobre Peso'>";
                            }
                            else if($res<=34.9){
                                echo"<label>Situação:</label><input type='float' value='Obesidade 1'>";
                            }
                            else if($res<=39.9){
                                echo"<label>Situação:</label><input type='float' value='Obesidade 2'>";
                            }
                            else{
                                echo"<label>Situação:</label><input type='float' value='Obesidade 3'>";
                            }
                        }                             
                        else{
                            echo"<label>IMC:</label><input type='float' value=''>";

                        }                  
                     
                    ?>
                </form>
                </fieldset>
            </div>
            <div class="col">
                <fieldset>
                    <form action="" method="POST">
                        <label for="">R$ Alcool:</label>
                        <input type="float" name="alc">
                        <br>
                        <label for="">R$ Gasolina:</label>
                        <input type="float" name="gas">
                        <br>
                        <input type="submit" value="Combustível" name="calcular">
                        <?php
                            include "php/calculos.php";
                        ?>
                    </form>
                </fieldset>


            </div>
        </div>
        
    </div>
    <!--Rodapé-->
    <?php
        require_once "php/rodape.php";
        require_once "php/rodape.php";
    ?>


    