var main=(function(){
	var init=function(){
		$('#sequence').css("display","none");
		
		$('#picSanti').hover(function(){
			$('#sequence').removeClass("seq-step1");
			$('#sequence').addClass("seq-step2");
			
			$('#step1').addClass("seq-in");
			$('#step1').removeClass("seq-out");

			$('#step2').addClass("seq-out");
			$('#step2').removeClass("seq-in");

			$('#step3').addClass("seq-out");
			$('#step3').removeClass("seq-in");


			$("#textoEnJoda").html("Programación | Videojuegos");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
		});

		$('#picGabo').hover(function(){
			//$('#sequence').removeClass("seq-step1");
			$('#step1').removeClass("seq-in");
			$('#step1').addClass("seq-out");

			$('#step1').css('z-index', '3');
			$('#step2').css('z-index', '2');

			$('#step2').removeClass("seq-out");
			$('#step2').removeClass("seq-in");

			$('#step3').addClass("seq-out");
			$('#step3').removeClass("seq-in");
			$("#textoEnJoda").html("Audio");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
		});

		$('#picJose').hover(function(){
			//$('#sequence').removeClass("seq-step1");
			$('#step1').removeClass("seq-in");
			$('#step1').addClass("seq-out");

			$('#step1').css('z-index', '3');
			$('#step2').css('z-index', '2');

			$('#step2').removeClass("seq-in");	
			$('#step2').addClass("seq-out");

			$('#step3').removeClass("seq-out");
			$('#step3').removeClass("seq-in");
			$("#textoEnJoda").html("Diseño | Animación");
		}, function(){
			$("#textoEnJoda").html("Como un Portfolio ... pero multi.");
		});

		
		$('#picGabo').mousedown(function(e){
			$("#navGabo")[0].click();
			$('#intro').css("display","none");
			$('#sequence').css("display","block");				
		});

		$('#picJose').mousedown(function(e){
			$("#navJose")[0].click();
			$('#intro').css("display","none");
			$('#sequence').css("display","block");				
		});

		$('#picSanti').mousedown(function(e){
			$("#navSanti")[0].click();
			$('#intro').css("display","none");
			$('#sequence').css("display","block");
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
