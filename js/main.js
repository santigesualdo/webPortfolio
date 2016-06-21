var main=(function(){
	var init=function(){
		$('#sequence').css("display","none");
		$('#nav').css("display","block");

		$("#aboutUs").click(function(){
	        $("#aboutUsDiv").toggle();
	    });

		$("#sobreNosotros").click(function(){
	        $("#sobreNosotrosDiv").toggle();
	    });
		
		$('#picSanti').hover(function(){
			hoverSanti();
			$("#textoEnJoda").html("Programación | Videojuegos");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
		});

		$('#picGabo').hover(function(){
			hoverGabo();
			$("#textoEnJoda").html("Audio");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
		});

		$('#picJose').hover(function(){
			hoverJose();
			$("#textoEnJoda").html("Diseño | Animación");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
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



		/*var timesClicked = 0;
		$( "#picSanti" ).bind( "click", function( event ) {
  			alert( "The quick brown fox jumps over the lazy dog." );
  			timesClicked++;
  			if ( timesClicked >= 3 ) {
    			$( this ).unbind( event );
  			}
		});

		$('#picSanti').mousedown(function(e){
			
			$('.seq-step1').addClass("seq-in");
			$('.seq-step2').addClass("seq-out");
			$('.seq-step3').addClass("seq-out");
			$('#liSanti').addClass("seq-current");
			$('#liJose').removeClass("seq-current");
			$('#liGabo').removeClass("seq-current");
			
		});
		$('#picGabo').mousedown(function(e){
			$('#intro').css("display","none");
			$('.seq-step2').addClass("seq-in");
			$('.seq-step1').addClass("seq-out");
			$('.seq-step3').addClass("seq-out");
			$('#liGabo').addClass("seq-current");
			$('#liJose').removeClass("seq-current");
			$('#liSanti').removeClass("seq-current");
			$('#sequence').css("display","block");	
		});

		$("#picJose").bind("click", clickJose);

		$("#navGabo").mousedown(function(e){
			$("#liJose").removeClass("seq-current");
			$("#liSanti").removeClass("seq-current");
			$('#sequence').removeClass("seq-step1");
			$('#sequence').removeClass("seq-step3");
		});*/

	

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
