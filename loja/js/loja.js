//CD1
/* area de variáveis globais */
var cd1 = 0.0;
var qtd1 = 0;
var total1 =0.0;




/* area de criação das funções */
function subCd1(c,q){
    cd1 = parseFloat(c);
    qtd1 = parseInt(q);
    total1 = cd1 * qtd1;
    document.getElementById('subtotal1').value=total1.toFixed(2);
}

//CD 2
var cd2 = 0.0;
var qtd2 = 0;
var total2 =0.0;

/* area de criação das funções */
function subCd2(c,q){
    cd2 = parseFloat(c);
    qtd2 = parseInt(q);
    total2 = cd2 * qtd2;
    document.getElementById('subtotal2').value=total2.toFixed(2);
}

//CD 3
var cd3 = 0.0;
var qtd3 = 0;
var total3=0.0;

/* area de criação das funções */
function subCd3(c,q){
    cd3 = parseFloat(c);
    qtd3 = parseInt(q);
    total3 = cd3 * qtd3;
    document.getElementById('subtotal3').value=total3.toFixed(2);
}

//CD4
var cd4 = 0.0;
var qtd4 = 0;
var total4=0.0;

/* area de criação das funções */
function subCd4(c,q){
    cd4 = parseFloat(c);
    qtd4 = parseInt(q);
    total4 = cd4 * qtd4;
    document.getElementById('subtotal4').value=total4.toFixed(2);
}

//CD5
var cd5 = 0.0;
var qtd5 = 0;
var total5=0.0;

/* area de criação das funções */
function subCd5(c,q){
    cd5 = parseFloat(c);
    qtd5 = parseInt(q);
    total5 = cd5 * qtd5;
    document.getElementById('subtotal5').value=total5.toFixed(2);
}
//CD6
var cd6 = 0.0;
var qtd6 = 0;
var total6=0.0;

/* area de criação das funções */
function subCd6(c,q){
    cd6 = parseFloat(c);
    qtd6 = parseInt(q);
    total6 = cd6 * qtd6;
    document.getElementById('subtotal6').value=total6.toFixed(2);
}
//CD7
var cd7 = 0.0;
var qtd7 = 0;
var total7=0.0;

/* area de criação das funções */
function subCd7(c,q){
    cd7 = parseFloat(c);
    qtd7 = parseInt(q);
    total7 = cd7 * qtd7;
    document.getElementById('subtotal7').value=total7.toFixed(2);
}


//CD8
var cd8 = 0.0;
var qtd8 = 0;
var total8=0.0;

/* area de criação das funções */
function subCd8(c,q){
    cd8 = parseFloat(c);
    qtd8 = parseInt(q);
    total8 = cd8 * qtd8;
    document.getElementById('subtotal8').value=total8.toFixed(2);
}
//CD9
var cd9 = 0.0;
var qtd9 = 0;
var total9=0.0;

/* area de criação das funções */
function subCd9(c,q){
    cd9 = parseFloat(c);
    qtd9 = parseInt(q);
    total9 = cd9 * qtd9;
    document.getElementById('subtotal9').value=total9.toFixed(2);
}
//CD10
var cd10 = 0.0;
var qtd10 = 0;
var total10=0.0;

/* area de criação das funções */
function subCd10(c,q){
    cd10 = parseFloat(c);
    qtd10 = parseInt(q);
    total10 = cd10 * qtd10;
    document.getElementById('subtotal10').value=total10.toFixed(2);
}

//Total

function finalizar(){
    var total=total1+total2+total3+total4+total5+total6+total7+total8+total9+total10;
    document.getElementById('total').value=total.toFixed(2);
}

