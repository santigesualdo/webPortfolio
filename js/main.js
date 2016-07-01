function loadImage(path, width, height, target) {
    $('<img src="'+ path +'">').load(function() {
      $(this).width(width).height(height).appendTo(target);
    });
}

function cargarImagenesFull(){
	if (!imagenesFull){
		imagenesFull = true;
		$("#picSanti").contents().remove();
		$("#picGabo").contents().remove();
		$("#picJose").contents().remove();
		loadImage("images/santi.png",120,120 , "#picSanti");
		loadImage("images/gabo.png",120,120 , "#picGabo");
		loadImage("images/jose.png",120,120 , "#picJose");
	}
}

function cargarImagenesChicas(){
	if (imagenesFull){
		imagenesFull=false;
		$("#picSanti").contents().remove();
		$("#picGabo").contents().remove();
		$("#picJose").contents().remove();
		loadImage("images/santi-tn.png",70,70 , "#picSanti");
		loadImage("images/gabo-tn.png",70,70 , "#picGabo");
		loadImage("images/jose-tn.png",70,70 , "#picJose");
	}
}

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.height() >= 820) { /* ... */ }
      
      if (win.width() < 630) { 
      	cargarImagenesChicas();
      }else{
      	cargarImagenesFull();
      }
});

var imagenesFull = false;

var main=(function(){
	var init=function(){

		var textoInicio = "Como un portfolio ... "
		var textoInicioSub = "pero multi.";

		$('#sequence').css("display","none");
		/*$('#intro').css("display","block");*/
		$('#nav').css("display","block");

		$(".textoEnJoda").css("font-size","1em");
		$(".textoEnJoda").css("font-family","Moskl");

		var win = $(window);
		if (win.width() < 630){
			cargarImagenesChicas();
		}else{
			cargarImagenesFull();	
		}
		

		$("#divHome").click(function(){
			location.reload(true);
		});

		$("#aboutUs").click(function(){
	        $("#aboutUsDiv").toggle();
	    });

		$("#sobreNosotros").click(function(){
	        $("#sobreNosotrosDiv").toggle();
	    });
		
		$('#picSanti').hover(function(){
			hoverSanti();
			$(".textoEnJoda").css("color","#fff");
			$(".textoEnJoda").html("PROGRAMACIÓN | VIDEOJUEGOS");
		}, function(){
			var asd = '<span id="textoEnJodaSub" style="color: #fff;">pero multi.</span>';
			$(".textoEnJoda").css("color","#6d7a97");
			$(".textoEnJoda").html(textoInicio + asd);
			//$("#textoEnJodaSub").html(textoInicioSub);
		});

		$('#picGabo').hover(function(){
			hoverGabo();
			$(".textoEnJoda").css("color","#fff");
			$(".textoEnJoda").html("AUDIO");
		}, function(){
			var asd = '<span id="textoEnJodaSub" style="color: #fff;">pero multi.</span>';
			$(".textoEnJoda").css("color","#6d7a97");
			$(".textoEnJoda").html(textoInicio + asd);
			//$("#textoEnJodaSub").html(textoInicioSub);
		});

		$('#picJose').hover(function(){
			hoverJose();
			$(".textoEnJoda").css("color","#fff");
			$(".textoEnJoda").html("DISEÑO | ANIMACIÓN");
		}, function(){
			var asd = '<span id="textoEnJodaSub" style="color: #fff;">pero multi.</span>';
			$(".textoEnJoda").css("color","#6d7a97");
			$(".textoEnJoda").html(textoInicio + asd);
			//$("#textoEnJodaSub").html(textoInicioSub);
		});


		$('#picSanti').mousedown(function(e){
			
			$('#intro').css("display","none");
			$('#sequence').css("display","block");
			$("#navSanti")[0].click();
		});
		
		$('#picGabo').mousedown(function(e){
			$('#intro').css("display","none");
			$('#sequence').css("display","block");	
			$("#navGabo")[0].click();
		});

		$('#picJose').mousedown(function(e){
			$('#intro').css("display","none");
			$('#sequence').css("display","block");
			$("#navJose")[0].click();	
		});
	};	


	


	function hoverSanti(){

		$('#step1').addClass("seq-in");
		$('#step1').removeClass("seq-out");

		$('#step3').removeClass("seq-in");
		$('#step2').removeClass("seq-in");

		$('#step3').addClass("seq-out");
		$('#step2').addClass("seq-out");

		$('#liJose').removeClass("seq-current");
		$('#liGabo').removeClass("seq-current");
		$('#liSanti').addClass("seq-current");

	}

	function hoverGabo(){

		$('#step2').addClass("seq-in");
		$('#step2').removeClass("seq-out");

		$('#step3').removeClass("seq-in");
		$('#step1').removeClass("seq-in");

		$('#step3').addClass("seq-out");
		$('#step1').addClass("seq-out");

		$('#liSanti').removeClass("seq-current");
		$('#liJose').removeClass("seq-current");
		$('#liGabo').addClass("seq-current");

	}

	function hoverJose(){
		$('#step3').addClass("seq-in");
		$('#step3').removeClass("seq-out");

		$('#step2').removeClass("seq-in");
		$('#step1').removeClass("seq-in");

		$('#step2').addClass("seq-out");
		$('#step1').addClass("seq-out");

		$('#liSanti').removeClass("seq-current");
		$('#liGabo').removeClass("seq-current");
		$('#liJose').addClass("seq-current");

		/*$('.seq-step3').css('z-index','3').css('transition-duration','0ms')
		.css('transition-property', 'opacity, transform').css('opacity','1');

		$('.seq-step2').addClass("seq-out");
		$('.seq-step2').css('z-index','2').css('transition-duration','500ms').
		css('transition-property', 'opacity, transform').css('opacity','0');
		
		$('.seq-step1').removeClass("seq-in");
		$('.seq-step1').addClass("seq-out");
		$('.seq-step1').css('z-index','1').css('transition-duration','0ms').
		css('transition-property', 'opacity, transform').css('opacity','1');

		$('#liJose').addClass("seq-current");
		$('#liSanti').removeClass("seq-current");
		$('#liGabo').removeClass("seq-current");*/
	}


	function clickJose(){
		$('#intro').css("display","none");
		$('#sequence').css("display","block");	

		$('.seq-step3').addClass("seq-in");
		$('.seq-step3').removeClass("seq-out");

		$('.seq-step3').css('z-index','3').css('transition-duration','0ms')
		.css('transition-property', 'opacity, transform').css('opacity','1');

		$('.seq-step2').addClass("seq-out");
		$('.seq-step2').css('z-index','2').css('transition-duration','500ms').
		css('transition-property', 'opacity, transform').css('opacity','0');
		
		$('.seq-step1').removeClass("seq-in");
		$('.seq-step1').addClass("seq-out");
		$('.seq-step1').css('z-index','1').css('transition-duration','0ms').
		css('transition-property', 'opacity, transform').css('opacity','1');

		$('#liJose').addClass("seq-current");
		$('#liSanti').removeClass("seq-current");
		$('#liGabo').removeClass("seq-current");

		$('#sequence').removeClass("seq-step1");
		$('#sequence').addClass("seq-step3");

		$("#picJose").unbind();
	};

	jQuery.fn.center = function () {
    	this.css("position","absolute");
    	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                	$(window).scrollTop()) + "px");
    	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                	$(window).scrollLeft()) + "px");
	    return this;
	};

return {
	init: init
}
}());
