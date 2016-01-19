<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    <meta name=viewport content="width=device-width">  
    <title>Full screen photo and image gallery</title>

<script src="../../../js/jquery-1.11.0.min.js" type="text/javascript"></script>
<link href="../../../css/style.css" type="text/css" rel="stylesheet"/>    

<link rel="stylesheet" href="../../../js/fancyBox/source/jquery.fancybox.css" type="text/css" media="screen" />
<script src="../../../js/fancyBox/source/jquery.fancybox.pack.js" type="text/javascript"></script>
    
<style type="text/css">
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
	$(document).ready(function() {

     $('.fancybox-buttons').fancybox({
        closeBtn  : true,
        helpers : {
          title : {
            type : 'inside'
          },
          buttons : {}
        },

        afterLoad : function() {
          this.title = this.alt;          
        }
      });
     
	});
</script>

</head>
<body>
<div id="wrap">
  <div class="contenidoText" style="width:100%;height:45%;" >
    <h2>  Wolverine Weapon X - C++ - SFML  </h2>
    <p>   . Juego de plataformas 2D, con diferentes enemigos y mecanicas, factor curación e items.  </p>
    <p>. 3 Niveles con dificultad ascendente.</p>
    <p>. <u>Controles:</u> </p>
    <p>.. Movimiento: Flechas de direccion.</p>
    <p>.. Ataque: Z , X , C .</p>
    <p>. <u>Instalacion:</u> </p>
    <p>.. Extraer archivo rar en la ubicacion que se prefiera. </p>
    <p>.. Ejecutar 'Wolverine_Weapon_X.exe'. </p>
    <p><a href="WolverineWeaponX.rar">(DESCARGAR DEMO)</a></p>
    <p>
        <!--a  rel="gallery" class="fancybox" href="image1.png" title="test1"><img alt="" src="thumb-image1.png"/></a-->
        <!--a  rel="gallery" class="fancybox" href="image2.png" title="test2"><img alt="" src="thumb-image2.png"/></a-->
        <!--a  rel="gallery" class="fancybox" href="image3.png" title="test3"><img alt="" src="thumb-image3.png"/></a-->

        <a class="fancybox-buttons" data-fancybox-group="button" href="image1.png" target="_parent"><img src="thumb-image1.png" alt="hola"></a>
        <a class="fancybox-buttons" data-fancybox-group="button" href="image2.png"><img src="thumb-image2.png" alt="hola2"></a>
        <a class="fancybox-buttons" data-fancybox-group="button" href="image3.png"><img src="thumb-image3.png" alt="hola3"></a>
    </p>  
  </div>

</div>



</body>
</html>