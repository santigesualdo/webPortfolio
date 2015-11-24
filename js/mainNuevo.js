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
		colores.violeton= "#92961e";




	var posInicial = {};
	posInicial.X = 150;
	posInicial.Y = 200;
	posInicial.difX = 235;

	var estados ={};
	estados.inicio = "inicio";
	estados.clickCircleA = "clickA";
	estados.clickCircleB = "clickB";
	estados.clickCircleC = "clickC";

	var textoCentral={};
	textoCentral.x = 400;
	textoCentral.y = 225;
	textoCentral.santi1 ="Programacion & Diseño";
	textoCentral.santi2 = "Santiago Gesualdo";
	textoCentral.santi3 = "( Programing & Design )";
	textoCentral.santi_1;
	textoCentral.santi_2;
	
	textoCentral.gabo1 = " Audio & Composicion ";
	textoCentral.gabo2 = "Gabriel Barukel";
	textoCentral.gabo3 = " ( Audio & Composiyon )";
	textoCentral.gabo_1;
	textoCentral.gabo_2;

	textoCentral.jose1 = "    Arte & Diseño    ";
	textoCentral.jose2 = "Josefina Gimenez";
	textoCentral.jose3 = "( Art & Design)";	
	textoCentral.jose_1;
	textoCentral.jose_2;

	var rx={};
	rx.A = 0;
	rx.B = 0;
	rx.C = 0;
	
	var ry={};
	ry.A = 0;
	ry.B = 0;
	ry.C = 0;

	var contentActivated = "-1";

	var estado = "";

	var fontNombres = "Pacifico";
	var fontNombres2 = "Oxygen";



	//variables
	var textIzq;
	var textDer;
	var paper;
	var contenedor_iframe;
	var set;
	var borde;
	var lineaMedio;
	var rectA, rectB;

	var pathbutcancel = "M27.812,16l-3.062-3.062V5.625h-2.625v4.688L16,4.188L4.188,16L7,15.933v11.942h17.875V16H27.812zM16,26.167h-5.833v-7H16V26.167zM21.667,23.167h-3.833v-4.042h3.833V23.167z";
	var butcancel;

	var pathbuthinfo = "M 100.942,0.001 C 44.9,0.304 -0.297,45.98 0.006,102.031 0.299,158.082 46.004,203.269 102.026,202.976 158.107,202.673 203.274,156.998 202.971,100.956 202.659,44.886 157.013,-0.292 100.942,0.001 Z m 1.006,186.435 C 55.032,186.67 16.84,148.86 16.576,101.944 16.332,55.037 54.113,16.787 101.029,16.533 c 46.926,-0.254 85.167,37.596 85.421,84.483 0.245,46.935 -37.595,85.166 -84.502,85.42 z m 15.036,-40.537 -0.42,-75.865 -39.149,0.254 0.078,16.6 10.63,-0.059 0.313,59.237 -11.275,0.039 0.088,15.857 49.134,-0.264 -0.098,-15.847 -9.301,0.048 z M 102.065,58.837 c 9.575,-0.039 15.349,-6.448 15.3,-14.323 -0.254,-8.07 -5.882,-14.225 -15.095,-14.186 -9.184,0.059 -15.173,6.292 -15.134,14.362 0.049,7.865 5.892,14.216 14.929,14.147 z"
	var butinfo;

	var infoCurvePath1 = "M 0,0 c 0,0 -18.276717,106.214317 0,154.285717 4.07557,10.71956 12.395406,21.01627 22.857143,25.71428 41.702401,18.72713 137.142851,0 137.142851,0";
	var infoCurve1;
	var infoCurvePath2 = "M 0,0 c 0,0 -30.9629251,172.048014 11.428571,240.000014 11.506055,18.44377 36.225862,25.50896 57.142855,31.42856 37.61667,10.64568 117.14285,5.71429 117.14285,5.71429"
	var infoCurve2;

	var clicked ;

	var circuloA;
	var circuloB;
	var circuloC;

	var contentLineA;
	var contentLineB;
	var contentLineC;

	var recuadroContenido ; 

	var circleTagsTime = 200;

	var offsetY = 100;
	var velCircles = 250;

	var init=function(){

		paper = null;

		var div = document.getElementById("paper");
		mainOptions.paperwidth = div.clientWidth;
		mainOptions.paperheigth = div.clientHeight;		
		
		mainOptions.halfwidth =  mainOptions.paperwidth*0.5;
		mainOptions.halfheigth = mainOptions.paperheigth*0.5;

		addGoogleFont(fontNombres);		
		addGoogleFont(fontNombres2);


		beginthings();
	};
	var beginthings = function(){

		clicked = false;
		fderover = false;

		estado = estados.inicio;

		recuadroContenido = undefined;

		rx.A = 150;
		ry.A = 90;
		
		rx.B = 360;
		ry.B = 90;

		rx.C = 645;
		ry.C = 90;

		paper= Raphael("paper", "100%","100%");

		$('#paper').center();
		$('#contentiframe').center();


		// Borde papel
		var borde = paper.rect(0,0,mainOptions.paperwidth, mainOptions.paperheigth)
		.attr({
			'stroke-width':5,
			stroke: 'black',
			'stroke-opacity': 1,
			opacity: 1,
			fill : colores.violeton
		});

		butcancel = paper.path(pathbutcancel).attr({
			transform: "t760,5",
			fill:"black",
			'stroke-width': 2,
			'stroke-opacity': 0.5,
			stroke: "white"
		})
		.mousedown(function(e){
			clickRestart();
		}).hover(function(e){
			butcancel.attr({
				'stroke-opacity': 1,
			});
		}, function(e){
			butcancel.attr({
				'stroke-opacity': 0.5,
			});
		});

		butinfo = paper.path(pathbuthinfo).attr({
			transform: "t400,0 s0.2",
			fill:"black",
			'stroke-width': 2,
			'stroke-opacity': 0.2,
			stroke: "white",
			opacity:0
		})
		.hover(function(e){
			butinfo.attr({
				'stroke-opacity': 1,
			});
		}, function(e){
			butinfo.attr({
				'stroke-opacity': 0.2,
			});
		}).mousedown(function(e){
			clickedInfo();
		})
		.toBack();

		var posInicialX = posInicial.X;
		var posInicialY = posInicial.Y;

		var sizeCircle = 100;
		var difX = posInicial.difX;

		circuloA = createCircle("a",posInicialX, posInicialY, sizeCircle, colores.rojito, textoCentral.santi1, textoCentral.santi2, textoCentral.santi3);
		circuloB = createCircle("b",posInicialX+difX, posInicialY, sizeCircle, colores.naranjita,textoCentral.gabo1, textoCentral.gabo2, textoCentral.gabo3);
		circuloC = createCircle("c",posInicialX+difX*2, posInicialY, sizeCircle, colores.verdecin,textoCentral.jose1, textoCentral.jose2, textoCentral.jose3);


		circuloA.mousedown(function(e){
			circuloAclick();
		});		

		circuloB.mousedown(function(e){
			circuloBclick();
		});
		
		circuloC.mousedown(function(e){
			circuloCclick();
		});
	};
	var createCircle = function( id, x , y , r , color, text1, text2, text3) {
		
		var circle;
		var w = 100;

		if (id == "a") {
			circle = paper.image ("data/icon_santi.png",x-w*0.5,y-w*0.5,w,w);
		}else
		if (id == "b") {
			circle = paper.image ("data/icon_gabo.png",x-w*0.5,y-w*0.5,w,w);
		}else{
			circle = paper.image ("data/icon_jose.png",x-w*0.5,y-w*0.5,w,w);
		}
		
		circle.attr({
			opacity:0.5
		}).hover(function(e){
			this.animate({
				opacity:1				
			},"linear",200);					
		}, function(e){
			this.animate({
				opacity:0.5
			},"linear",200)
			//setTextoCentralFade();
		});		

		return circle;
	}
	var clickRestart = function(){
			circuloA.toFront();
			circuloB.toFront();
			circuloC.toFront();

			circuloA.animate({
				transform: "t0,0"
			}, 200,"linear");

			circuloB.animate({
				transform: "t0, 0"
			}, 200,"linear");

			circuloC.animate({
				transform: "t0, 0"
			}, 200,"linear");

			butinfo.toBack();

			desaparecerRecuadro();

			limpiarTextos();

			limpiarLineasContent();

			estado = estados.inicio;
	}	
	var circuloAclick = function(){
		
		if ( estado != estados.clickCircleA) {
			desaparecerRecuadro();
			limpiarLineasContent();
		}

		var scale = 0.75;
		
			if (estado == estados.inicio){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-75,-125"
				}, velCircles,"linear");

				circuloB.animate({
					transform: "t250,-150 s"+scale
				}, velCircles,"linear", crearContenido("a"));

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");
			}else 
			if (estado == estados.clickCircleB){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-75,-125 s1"
				}, velCircles,"linear",crearContenido("a"));

				circuloB.animate({
					transform: "t250,-150 s"+scale
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");				
			}else 
			if (estado == estados.clickCircleC){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-75,-125 s1"
				}, velCircles,"linear",crearContenido("a"));

				circuloB.animate({
					transform: "t250,-150 s"+scale
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");				
			}
	}
	var circuloBclick = function(){
		if ( estado != estados.clickCircleB) {
			desaparecerRecuadro();
			limpiarLineasContent();
		}

		var scale = 0.75;

			if (estado == estados.inicio){
				estado = estados.clickCircleB;

				circuloB.animate({
					transform: "t-100, -125"
				}, velCircles,"linear",crearContenido("b"));

				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear");

				setTextoCentralFade();

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");
			} else
			if (estado == estados.clickCircleA){
				estado = estados.clickCircleB;
				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear");

				circuloB.animate({
					transform:  "t-100, -125 s1"
				}, velCircles,"linear",crearContenido("b"));

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");				
			}else
			if (estado == estados.clickCircleC){
				estado = estados.clickCircleB;
				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear",crearContenido("b"));

				circuloB.animate({
					transform:  "t-100, -125 s1"
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t125,-150 s"+scale
				}, velCircles,"linear");		
			}
	}
	var circuloCclick = function(){
		if ( estado != estados.clickCircleC) {
			desaparecerRecuadro();
			limpiarLineasContent();
		}

		var scale = 0.75;

			if (estado == estados.inicio){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear");

				circuloB.animate({
					transform: "t-190, -150 s"+scale
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t100, -125"
				}, velCircles,"linear",crearContenido("c"));
			}else 
			if (estado == estados.clickCircleA){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear");

				circuloB.animate({
					transform: "t-190, -150 s"+scale
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t100, -125 s1"
				}, velCircles,"linear",crearContenido("c"));				
			}else 
			if (estado == estados.clickCircleB){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-75, -150 s"+scale
				}, velCircles,"linear");

				circuloB.animate({
					transform: "t-190, -150 s"+scale
				}, velCircles,"linear");

				circuloC.animate({
					transform: "t100, -125 s1"
				}, velCircles,"linear",crearContenido("c"));				
			}
	}
	var clickedInfo = function(){
	
		desaparecerRecuadro();

		if (estado === estados.clickCircleA) {
			infoA();
		}else if (estado === estados.clickCircleB){
			infoB();
		}else if (estado === estados.clickCircleC){
			infoC();
		}

	}	
	var infoA = function(){
		/*canvas, pathstr, duration, attr, callback*/
		var path = infoCurvePath2.replace("0,0", rx.A + ","+ ry.A+15 );
		var path2 = infoCurvePath1.replace("0,0", rx.A + ","+ry.A+15 );
		
		infoCurve1 = drawpath(paper,
			path,
			800,
			{ stroke: "black", 'stroke-width': 2, 'stroke-opacity': 1, opacity : 1, 'fill-opacity': 1, fill: "white" },
			null
		);				

		/*infoCurve2 = drawpath(
			paper,
			path2,
			300,
			{ stroke: "black", 'stroke-width': 2}
		);*/
		
	}
	var infoB = function(){

	}
	var infoC = function(){

	}
	var desaparecerRecuadro = function(){
		
		if (recuadroContenido!=undefined){
			recuadroContenido.attr({
				'stroke-opacity':0,
				opacity:0
			});			
		}

		$('#contentiframe').css("display","none");
	}
	var crearContenido= function(circulo){

		if (circulo === "a"){
			contenidoA();
		}else 
		if (circulo === "b"){
			contenidoB();
		}else
		if (circulo === "c"){
			contenidoC();
		}	
	}
	var exist = function(obj){
	    return (typeof obj !== 'undefined' );
	}
	var limpiarLineasContent = function(){

		
		if (exist(contentLineA)){
			contentLineA.remove();	
		}

		if (exist(contentLineB)){
			contentLineB.remove();	
		}

		if (exist(contentLineC)){
			contentLineC.remove();	
		}				
		
		/*if(typeof contentLineaA !== 'undefined'){
    		alert(contentLineaA);
    		contentLineA.remove();
		} else {

		}

		if(typeof contentLineaB !== 'undefined'){
    		alert(contentLineaB);
    		contentLineB.remove();
		};	

		if(typeof contentLineaC !== 'undefined'){
    		alert(contentLineaC);
    		contentLineC.remove();
		};	*/
	}
	var contenidoA = function(){

		limpiarTextos();

		var mostrarSlider = function(e){
			var url = 'slider.html';
			$('#contentiframe').prop('src', url);
			$('#contentiframe').css( "display", "inline");
		};	

		var pathString = "m "+rx.A+","+ry.A +" l 200,0";

		butinfo.animate({
			transform: "t245,-40 s0.15",
			opacity:1
		},1000,"backOut").toFront();

		textoCentral.santi_1 = paper.text( 230 , 65 , textoCentral.santi2)
		.attr({
			opacity:0,
			"font-family": "Architects Daughter, sans-serif",
			 fill:  colores.rojito, 
			 'font-size': 25
		}).animate({
			opacity:1
		},800,"linear", function(){
			textoCentral.santi_2 = paper.text( 230 , 40 , textoCentral.santi1)
			.attr({
				opacity:0,
				"font-family": "Architects Daughter, sans-serif",
				 fill:  colores.rojito, 
				 'font-size': 20
			}).animate({
				opacity:1
			},800,"linear");			
		});

		contentLineA = drawpath(
						paper,
						pathString,
						circleTagsTime,
						{ stroke: "white", 'stroke-width': 2, 'stroke-opacity': 1 ,fill: "white","fill-opacity": 1},
	        			function(e){
	        				circuloA.toFront();
	        				mostrarSlider();
		        		}
					);	
	}
	var contenidoB = function(){

		limpiarTextos();

		var mostrarSlider = function(e){
			var url = 'slider.html';
			$('#contentiframe').prop('src', url);
			$('#contentiframe').css( "display", "inline");
		};	

		butinfo.animate({
			transform: "t440,-40 s0.15",
			opacity:1
		},1000,"backOut")
		.toFront();

		textoCentral.gabo_1 = paper.text( 435 , 65 , textoCentral.gabo2)
		.attr({
			opacity:0,
			"font-family": "Architects Daughter, sans-serif",
			 fill:  colores.rojito, 
			 'font-size': 25
		}).animate({
			opacity:1
		},800,"linear", function(){
			textoCentral.gabo_2 = paper.text( 435 , 40 , textoCentral.gabo1)
			.attr({
				opacity:0,
				"font-family": "Architects Daughter, sans-serif",
				 fill:  colores.rojito, 
				 'font-size': 20
			}).animate({
				opacity:1
			},800,"linear");			
		});

		var pathString = "m "+rx.B+","+ry.B +" l 200,0";
		
		contentLineB = drawpath(
						paper,
						pathString,
						circleTagsTime,
						{ stroke: "white", 'stroke-width': 2, 'stroke-opacity': 1 ,fill: "black","fill-opacity": 1},
	        			function(e){
	        				circuloB.toFront();
	        				mostrarSlider();
						}
		);	
	}
	var contenidoC = function(){

		limpiarTextos();
		var mostrarSlider = function(e){
			var url = 'slider.html';
			$('#contentiframe').prop('src', url);
			$('#contentiframe').css( "display", "inline");
		};	
		
		butinfo.animate({
			transform: "t535,-40 s0.15",
			opacity:1
		},1000,"backOut")
		.toFront();	

		
		textoCentral.jose_1 = paper.text( 525 , 65 , textoCentral.jose2)
		.attr({
			opacity:0,
			"font-family": "Architects Daughter, sans-serif",
			 fill:  colores.rojito, 
			 'font-size': 25
		}).animate({
			opacity:1
		},800,"linear", function(){
			textoCentral.jose_2 = paper.text( 525 , 40 , textoCentral.jose1)
			.attr({
				opacity:0,
				"font-family": "Architects Daughter, sans-serif",
				 fill:  colores.rojito, 
				 'font-size': 20
			}).animate({
				opacity:1
			},800,"linear");	
		});



		var pathString = "m "+rx.C+","+ry.C +" l -200,0";
		
		contentLineC = drawpath(
						paper,
						pathString,
						circleTagsTime,
						{ stroke: "white", 'stroke-width': 2, 'stroke-opacity': 1 ,fill: "white","fill-opacity": 1},
	        			function(e){
	        				circuloC.toFront();
	        				mostrarSlider();

		        		}
					);
	}
	var limpiarTextos = function(){

		if (exist(textoCentral.jose_1)) textoCentral.jose_1.remove();
		if (exist(textoCentral.jose_2)) textoCentral.jose_2.remove();
		if (exist(textoCentral.gabo_1)) textoCentral.gabo_1.remove();
		if (exist(textoCentral.gabo_2)) textoCentral.gabo_2.remove();
		if (exist(textoCentral.santi_1)) textoCentral.santi_1.remove();
		if (exist(textoCentral.santi_2)) textoCentral.santi_2.remove();
	}

	var setTextoCentral = function(id,text1,text2,text3){

		if (textoCentral.t1 != null) textoCentral.t1.remove();
		if (textoCentral.t2 != null) textoCentral.t2.remove();
		if (textoCentral.t3 != null) textoCentral.t3.remove();

		if (estado == estados.inicio){

			textoCentral.t1 = paper.text(textoCentral.x, textoCentral.y).
			attr({
				text: text1,
				//"font-family": "Oxygen, sans-serif",
				//"font-family": "Pacifico, sans-serif",
				"font-family": "Architects Daughter, sans-serif",
				'font-size': 25,
				fill: "white",
				opacity:0,

			}).animate({
				opacity:1
			},200,"linear");		

			textoCentral.t2 = paper.text(textoCentral.x, textoCentral.y+30).
			attr({
				text: text2,
				"font-family": "Architects Daughter, sans-serif",
				//"font-family": "Oxygen, sans-serif",
				//font: fontNombres,
				'font-size': 20,
				fill: "white",
				opacity:1,

			}).animate({
				opacity:1
			},200,"linear");

			textoCentral.t3 = paper.text(textoCentral.x, textoCentral.y+55).
			attr({
				text: text3,
				"font-family": "Architects Daughter, cursive",
				font: fontNombres,
				'font-size': 18,
				fill: "white",
				opacity:1,

			}).animate({
				opacity:1
			},200,"linear");

			if (id=="a"){
				if (circuloALine1 ==null){
					circuloALine1 = drawpath(
						paper,
						circuloALine1Path,
						circleTagsTime,
						{ stroke: "black", 'stroke-width': 4, 'stroke-opacity': 1 ,fill: "white","fill-opacity": 0},
	        			function(e){
	        				circuloA.toFront();
		        			circuloALine1.animate({
		        				"fill-opacity": 0.3	
		        			}, 100, "linear")
		        		}
					);		
				}
			}else if(id=="b"){
				if (circuloALine2 ==null){
					circuloALine2 = drawpath(
						paper,
						circuloALine2Path,
						circleTagsTime,
						{ stroke: "black", 'stroke-width': 4, 'stroke-opacity': 1 ,fill: "white","fill-opacity": 0},
		        		function(e){
		        			circuloB.toFront();
		        			circuloALine2.animate({
		        				"fill-opacity": 0.3	
		        			}, 100, "linear")
		        		}
					);		
				}
			}else if(id=="c"){
				if (circuloALine3 ==null){
					circuloALine3 = drawpath(
						paper,
						circuloALine3Path,
						circleTagsTime,
						{ stroke: "black", 'stroke-width': 4, 'stroke-opacity': 1 , fill: "white","fill-opacity": 0},
		        		function(e){
		        			circuloC.toFront();
		        			circuloALine3.animate({
		        				"fill-opacity": 0.3	
		        			}, 100, "linear")
		        		}
					);		
				}
			}
		}
	}
	var setTextoCentralFade = function(){
		if (textoCentral.t1 != null) {

			textoCentral.t1.animate({
				opacity:0
			},200,"linear", function(e){
				textoCentral.t1.remove();
			});

			textoCentral.t2.animate({
				opacity:0
			},200,"linear", function(e){
				textoCentral.t2.remove();
			});

			textoCentral.t3.animate({
				opacity:0
			},200,"linear", function(e){
				textoCentral.t3.remove();
			});		

			if (circuloALine1!=null){
				circuloALine1.remove();	
				circuloALine1= null;
			}
			
			if (circuloALine2!=null){
				circuloALine2.remove();	
				circuloALine2= null;
			}

			if (circuloALine3!=null){
				circuloALine3.remove();	
				circuloALine3= null;
			}
		}
	}
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