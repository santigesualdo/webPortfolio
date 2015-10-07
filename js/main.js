var main=(function(){
	var mainOptions={};
		mainOptions.paperwidth = 0;
		mainOptions.paperheigth = 0;
		mainOptions.halfwidth = 0;
		mainOptions.halfheigth = 0 ;
	var colores={};
		colores.naranjita = "#fbaf47";
		colores.rojito= "#ef4e5c";
		colores.verdecin= "#68be5e";
		colores.violeton= "#41194e";

	//
	var setSantiContent=null;
	var setJoseContent=null;

	var fontNombres = "Rock Salt";
	//variables
	var textIzq;
	var textDer;
	var paper;
	var set;
	var borde;
	var lineaMedio;
	var rectA, rectB;
	//circulos
	var circuloIzq;
	var circuloDer;
	//lineas
	var lineaUp;
	var lineDown;
	//lineas curvas
	var lineUpCurve;
	var lineDownCurve;
	// path svg circulo
	var pathhalfcircle = "m 50.886437,78.28176 c -20.896,0.7679 -37.914378,-21.7282 -31.462367,-41.62843 3.388196,-13.59929 18.168143,-24.86904 31.462367,-23.31599 -10e-7,21.64814 -10e-7,43.29632 0,64.94442 z";
	// path curvas
	var pathcurveUp = "m 398,103 c 0,0 170.71578,-16.16244 211.12188,195.9696";
	var pathcurveDown ="m 407.09148,488 c 0,0 -218.19295,-1.01015 -220.21326,-226.27417";

	var pathbutcancel = "M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z";
	var butcancel;

	var clicked ;

	var fderover;

	var init=function(){

		paper = null;

		var div = document.getElementById("paper");
		mainOptions.paperwidth = div.clientWidth;
		mainOptions.paperheigth = div.clientHeight;		
		
		mainOptions.halfwidth =  mainOptions.paperwidth*0.5;
		mainOptions.halfheigth = mainOptions.paperheigth*0.5;

		addGoogleFont(fontNombres);

		

		beginthings();
	};

	var beginthings = function(){

		clicked = false;
		fderover = false;

		paper= Raphael("paper", "100%","100%");

		$('#paper').center();

		// Rectangulo primer mitad
		rectA = paper.rect(0,0, mainOptions.halfwidth, mainOptions.paperheigth)
		.attr({ 	fill: colores.rojito,'stroke-width': 0	});
		
		// Rectangulo segunda mitad
		rectB = paper.rect(mainOptions.halfwidth,0,mainOptions.halfwidth, mainOptions.paperheigth)
		.attr({
			fill: colores.verdecin,'stroke-width': 0,	 
		});

		// Linea que se anima hacia abajo
		lineDown = paper.path(["M", mainOptions.halfwidth-2, mainOptions.halfheigth, "L", mainOptions.halfwidth, mainOptions.halfheigth-1])
		.attr({ 'stroke-opacity': 0,stroke: colores.rojito, 'stroke-width': 5});

		// Linea que se anima hacia arriba
		lineUp = paper.path(["M", mainOptions.halfwidth+2, mainOptions.halfheigth, "L", mainOptions.halfwidth, mainOptions.halfheigth+1])
		.attr({ 'stroke-opacity': 0, stroke: colores.verdecin, 'stroke-width': 5});

		//Mitad circulo izquierda
		circuloIzq = paper.path(pathhalfcircle).attr({
			transform: "t267,250 s6",
			fill: colores.naranjita,
			'stroke-width': 0,	
		});

		//texto izquierda JOSE
		textIzq = paper.text( 315 , 270 , "Jo.Gimenez\nDiseño")
		.attr({
			opacity:1,
			'font-family': fontNombres,
			 fill:  colores.rojito, 
			 'font-size': 20
		});

		var izqSet = paper.set();
		izqSet.push(circuloIzq);
		izqSet.push(textIzq);
		izqSet.mouseover(function(e){izqOver();})
		.mousedown(function(e){
			clickJose();
		});

		circuloDer = paper.path(pathhalfcircle).attr({
			transform: "t464,250 s6 r180",
			fill: colores.violeton,
			'stroke-width': 0, 
		});

		//texto derecha SANTI
		textDer = paper.text( mainOptions.halfwidth+100, 270, "Santi.Ge\nProgramacion")
		.attr({
			opacity:1,
			'font-family': fontNombres,
			 fill: colores.verdecin,
			 'font-size': 20
		});

		var derSet = paper.set();
		derSet.push(circuloDer);
		derSet.push(textDer);
		derSet.hover(function(e){derOver();})
		.mousedown(function(e){
			clickSan();
		});


		butcancel = paper.path(pathbutcancel).attr({
			transform: "t750,20",
			fill:"black",
			'stroke-width': 2,
			stroke: "white"
		}).hide()
		.mousedown(function(e){
			paper.clear();
			paper.remove();
			beginthings();
		});

		// Borde papel
		var borde = paper.rect(0,0,mainOptions.paperwidth, mainOptions.paperheigth)
		.attr({
			'stroke-width':10,
			stroke: 'white',
			'stroke-opacity': 1,
		}).glow(10,false,0.75,0,0,"white");
	};
	
	var izqOver = function(){
		
		fderover = false;

		if (lineUpCurve!=null) lineUpCurve.remove();
		if (lineDownCurve!=null)lineDownCurve.remove();

		if (!clicked){

			lineUpCurve = null;
			lineDownCurve = null;

			lineUpCurve = drawpath( paper, 
	         pathcurveUp, 
	         800, 
	         { stroke: colores.rojito, 'stroke-width': 5, 'stroke-opacity': 1, fill: 'none', 'fill-opacity': 0 },
	          null
	     	);	

			circuloIzq.animate({
				fill: colores.rojito,
				opacity: 1
			}, 500,	"linear"); 	
		
			lineDown.animate({
				path: ["M", mainOptions.halfwidth-3, mainOptions.halfheigth, "L", mainOptions.halfwidth, mainOptions.paperheigth],
				'stroke-opacity':1
			},800,"linear");

			circuloDer.animate({
				opacity:0,
				'stroke-opacity': 0
			},500,"linear");

			textIzq.animate({
				fill: colores.naranjita,
				opacity: 1
			}, 500, "linear");

			textDer.animate({
				opacity: 0
			},500 , "linear");

			rectA.animate({
			   opacity:1,
			   fill: colores.naranjita
			},200,"linear");

			rectB.animate({
			   opacity:1,
			   fill: colores.naranjita
			},200,"linear");	

			lineUp.animate({
				path: ["M", mainOptions.halfwidth+2,100, "L", mainOptions.halfwidth, mainOptions.halfheigth],
				'stroke-opacity': 0
			},800,"linear");

		}
	};

	var derOver= function(){

		if (lineUpCurve!=null) lineUpCurve.remove();
		if (lineDownCurve!=null)lineDownCurve.remove();

		if (!clicked){
			 if(!fderover){

			 fderover = true;

			 lineDownCurve = drawpath( paper, 
	         pathcurveDown, 
	         800, 
	         { stroke: colores.verdecin, 'stroke-width': 5, 'stroke-opacity': 1, fill: 'none', 'fill-opacity': 0 },
	          null
	     	 );		

	     	 lineDown.animate({
				path: ["M", mainOptions.halfwidth, mainOptions.paperheigth-110, "L", mainOptions.halfwidth, mainOptions.halfheigth],
				'stroke-opacity': 0,
			},800,"linear");

			circuloDer.animate({
				opacity:1,		
				fill: colores.verdecin,
				}, 500,	"linear"); 

			lineUp.animate({
				path: ["M", mainOptions.halfwidth+3, mainOptions.halfheigth, "L", mainOptions.halfwidth, 0],
				'stroke-opacity':1
			},800,"linear");

			circuloIzq.animate({
				opacity:0
			},500,"linear");

			textDer.animate({
				fill: colores.violeton,
				opacity: 1
			}, 500, "linear");

			textIzq.animate({
				opacity:0
			}, 500, "linear");

			rectA.animate({
			   opacity:1,
			   fill: colores.violeton
			},200,"linear");

			rectB.animate({
			   opacity:1,
			   fill: colores.violeton
			},200,"linear");

			 }
			
		}
	};

	var clickJose = function(){

		circuloIzq.animate({
			transform: "t350,-20 s6 r-90",
		},500,"linear")
		.hover(function(e){}, function(e){});

		textIzq.animate({
			transform: "t70,-220 ",	
		}, 500 , "linear");

		lineDown.attr({
			opacity:0
		})

		butcancel.show();

		clicked = true;

		if (lineUpCurve!=null) lineUpCurve.remove();
		if (lineDownCurve!=null) lineDownCurve.remove();
	};

	var clickSan = function(){
		
		textDer.animate({
			transform: "t-100,-220 ",	
		}, 500 , "linear");

		circuloDer.animate({
			transform: "t350,-20 s6 r270",
		},500,"linear", function(){
		});

		lineUp.attr({
			opacity:0
		});

		clicked = true;

		var firstX = 10;
		var xAcum = 220;
		var yAcum = 110;
		var firstY = 150;

		var image1 = createClickeableContent('#game1', "data/santi/contenido1/", firstX, firstY, 100, 100);
		var image2 = createClickeableContent('#game2', "data/santi/contenido2/", firstX, firstY+yAcum*1, 100, 100);
		var image3 = createClickeableContent('#game3', "data/santi/contenido3/", firstX, firstY+yAcum*2, 100, 100);
		var image4 = createClickeableContent('#game4', "data/santi/contenido4/", firstX, firstY+yAcum*3, 100, 100);
		var image5 = createClickeableContent('#game5', "data/santi/contenido5/", firstX+xAcum*1, firstY, 100, 100);
		var image6 = createClickeableContent('#game6', "data/santi/contenido6/", firstX+xAcum*1, firstY+yAcum*1, 100, 100);

		setSantiContent = paper.set();
		setSantiContent.push(image1);
		setSantiContent.push(image2);
		setSantiContent.push(image3);
		setSantiContent.push(image4);
		setSantiContent.push(image5);
		setSantiContent.push(image6);

		//setSantiContent.hide();

		butcancel.show();

		if (lineUpCurve!=null) lineUpCurve.remove();
		if (lineDownCurve!=null) lineDownCurve.remove();
		
	};

	var createClickeableContent = function( divGame, contentPath , x , y , w , h ) {

		var img = contentPath + "thumb.png";

		var image= paper.image( img , x, y, w, h);

		var radius = w/2;		

		var borderCircle = paper.circle( x  + radius  , y + radius , radius - 3).attr({
			stroke: colores.verdecin,
			'stroke-width': 2,
			'stroke-opacity' : 0.5
		});

		textDescrip = $(divGame).attr('title');

		var res = textDescrip.replace(/- /g, "-\n");

		var t = paper.text(x+radius*3.25, y+radius).hide().
		attr({
			text: res,
			font: fontNombres,
			'font-size': 10,
			fill: 'white'
		});		

		var contentSet = paper.set();
		contentSet.attr({
			title: 'Play'
		});
		contentSet.push(image);
		contentSet.push(borderCircle);

		contentSet.hover(
			function(e){ 
				borderCircle.g = borderCircle.glow({color: colores.verdecin, width: 10});
				t.show();
			}, function(e){ 
				borderCircle.g.remove();
				t.hide();
			});

		
			
		contentSet.mousedown(function(e){
			$(divGame)[0].click(); 
		});				
		


	
		return contentSet;
	};

	var drawpath = function( canvas, pathstr, duration, attr, callback )
	{
	    var guide_path = canvas.path( pathstr ).attr( { stroke: "none", fill: "none" } );
	    var path = canvas.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
	    var total_length = guide_path.getTotalLength( guide_path );
	    var last_point = guide_path.getPointAtLength( 0 );
	    var start_time = new Date().getTime();
	    var interval_length = 50;
	    var result = path; 
	    var interval_id = setInterval( function()
	        {
	            var elapsed_time = new Date().getTime() - start_time;
	            var this_length = elapsed_time / duration * total_length;
	            var subpathstr = guide_path.getSubpath( 0, this_length );
	            attr.path = subpathstr;
	            path.animate( attr, interval_length );
	            if ( elapsed_time >= duration )
	            {
	                clearInterval( interval_id );
	                if ( callback != undefined ) callback();
	                    guide_path.remove();
	            }
	         }, interval_length );
	     return result;
 	};

	jQuery.fn.center = function () {
    	this.css("position","absolute");
    	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                	$(window).scrollTop()) + "px");
    	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                	$(window).scrollLeft()) + "px");
	    return this;
	};

	var addGoogleFont= function(fontname) {
	    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + fontname + "' rel='stylesheet' type='text/css'>");
	};

	return {
		init: init
	}
}());