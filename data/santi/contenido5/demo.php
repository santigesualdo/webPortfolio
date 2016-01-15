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
		// Initialize Fancybox
        $('#my-gallery').fancybox({
            // Use the `alt` attribute for captions per http://fancyapps.com/fancybox/#useful
            beforeShow: function() {
                var alt = this.element.find('img').attr('alt');
                this.inner.find('img').attr('alt', alt);
                this.title = alt;
            }
        });
	});
</script>

</head>
<body>

<div class="contenidoText" style="width:100%;height:30%;text-align:left;">
  <h2>  Wolverine Weapon X - C++ - SFML  </h2>
  <p>   . Juego de plataformas 2D, con diferentes enemigos y mecanicas, factor curación e items.  </p>
  <p>. 3 Niveles con dificultad ascendente.</p>
  <p>. <u>Controles:</u> </p>
  <p>.. Movimiento: Flechas de direccion.</p>
  <p>.. Ataque: Z , X , C .</p>
  <p>. <u>Instalacion:</u> </p>
  <p>.. Extraer archivo rar en la ubicacion que se prefiera. </p>
  <p>.. Ejecutar 'Wolverine_Weapon_X.exe'. </p>
  <div style="text-align:center">
    <p><a href="WolverineWeaponX.rar">(DESCARGAR DEMO)</a></p>
  </div>
</div>

<div id="my-gallery" class="editable-gallery">
    <a href="" data-fancybox-group="my-gallery">
        <img src="image1.png" alt="Menu beta.">
    </a>
    <a href="" data-fancybox-group="my-gallery">
        <img src="image2.png" alt="Wolverine vs Patrol guy.">
    </a>
     <a href="" data-fancybox-group="my-gallery">
        <img src="image3.png" alt="Wolverine vs Sentinel.">
    </a>
</div>


    
<!--div style="display:none;margin:0 auto; width:100%;heigth=70%;" 
	class="html5gallery"
	data-responsive="true"
	data-responsivefullscreen="true"
	data-html5player="true"
	data-autoslide="false" 
	data-skin="light" 
	data-slideshadow="false"
	data-showtitle="false" 
	data-showsocialmedia="false" 
	data-showfullscreenbutton="false"   
	data-autoplayvideo="false" 
	data-width="800" 
	data-height="450" 
	data-effect="slide" 
	data-resizemode="fit" 
	data-googleanalyticsaccount="UA-29319282-1"
	>

	<a href="image1.png">
		<img src="thumb-image1.png" alt="Waves" data-description="Image1.">
	</a>

	<a href="image2.png">
		<img src="thumb-image2.png" alt="Waves" data-description="Image2.">
	</a>

	<a href="image3.png">
		<img src="thumb-image3.png" alt="Waves" data-description="Image3.">
	</a>

</div-->



</body>
</html>