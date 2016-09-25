/*function cambio(){
    var ing=document.getElementById("ingreso");
        ing.style.display="none";
    
    var nos=document.getElementById("nosotros");
        nos.style.display="block";
        nos.slideUp="slow";
    
    /*var n=document.getElementById("nos");
        n.style.background="#93949e";
        n.style.color="#34343a";*/
    
/*}*/
/*
function principal(){
    var nos=document.getElementById("nosotros");
        nos.style.display="none";
    var ing=document.getElementById("ingreso");
        ing.style.display="block";
    /*var n=document.getElementById("nos");
        n.style.background="#46474e";
        n.style.color="white";*/
    
/*}
*/

/*--------PARA CERRAR EL REGISTRO DE USUARIO------*/
function abrirmodal(){
    $('#ingreso').animate({opacity:0},500);
    $('#ventana').animate({left:"100px"},1000);  
}
function cerrarmodal(){
	$('#ventana').animate({left:"1200px"},1000);
    $('#ingreso').animate({opacity:1},500);
   
}

/*-------------PARA CERRAR EL REGISTRO DE REESTABLECER----------*/
/*--------PARA CERRAR EL REGISTRO DE USUARIO------*/
function abrirmodal2(){
    $('#ingreso').animate({opacity:0},500);
    $('#ventana2').animate({left:"200px"},1000);
}
function cerrarmodal2(){
    $('#ventana2').animate({left:"-800px"},1000);
    $('#ingreso').animate({opacity:1},500);
}
/*--------------------------------------------------------------*/




/* ------------- NOSOTROS -------------------------------------*/
/* --------------------------------------------------------------*/
    function redes(){
        $('.spanns').animate({fontSize:"30px"},700);
    }
    function redesout(){
        $('.spanns').animate({fontSize:"0px"},700);
    }
/* ********************************************************************** */
/* *********************************************************************** */
