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

	var infoCurvePath1 = "M 0,0 c 0,0 -8.374528,43.557659 0,63.271365 1.86746,4.396 5.982645,8.453 10.47332,10.54522 10.390112,4.8408 34.268446,2.85714 34.268446,2.85714";
	var infoCurve1;
	var infoCurvePath2 = "M 0,0 c 0,0 -11.442707,70.701094 4.223561,98.625154 4.252195,7.57925 13.151293,10.76587 21.117802,12.9152 7.497602,2.02282 23.291491,-0.50892 23.291491,-0.50892";
	var infoCurve2;

	var pathLinke = "M27.25,3.125h-22c-1.104,0-2,0.896-2,2v22c0,1.104,0.896,2,2,2h22c1.104,0,2-0.896,2-2v-22C29.25,4.021,28.354,3.125,27.25,3.125zM11.219,26.781h-4v-14h4V26.781zM9.219,11.281c-1.383,0-2.5-1.119-2.5-2.5s1.117-2.5,2.5-2.5s2.5,1.119,2.5,2.5S10.602,11.281,9.219,11.281zM25.219,26.781h-4v-8.5c0-0.4-0.403-1.055-0.687-1.213c-0.375-0.211-1.261-0.229-1.665-0.034l-1.648,0.793v8.954h-4v-14h4v0.614c1.583-0.723,3.78-0.652,5.27,0.184c1.582,0.886,2.73,2.864,2.73,4.702V26.781z";
	var pathFace = "M25.566,2.433H6.433c-2.2,0-4,1.8-4,4v19.135c0,2.199,1.8,4,4,4h19.135c2.199,0,4-1.801,4-4V6.433C29.566,4.232,27.768,2.433,25.566,2.433zM25.309,16.916h-3.218v11.65h-4.819v-11.65h-2.409V12.9h2.409v-2.411c0-3.275,1.359-5.224,5.229-5.224h3.218v4.016h-2.011c-1.504,0-1.604,0.562-1.604,1.608L22.091,12.9h3.644L25.309,16.916z";
	var pathMail = "M28.516,7.167H3.482l12.517,7.108L28.516,7.167zM16.74,17.303C16.51,17.434,16.255,17.5,16,17.5s-0.51-0.066-0.741-0.197L2.5,10.06v14.773h27V10.06L16.74,17.303z";
	var pathSkype = "M28.777,18.438c0.209-0.948,0.318-1.934,0.318-2.944c0-7.578-6.144-13.722-13.724-13.722c-0.799,0-1.584,0.069-2.346,0.2C11.801,1.199,10.35,0.75,8.793,0.75c-4.395,0-7.958,3.562-7.958,7.958c0,1.47,0.399,2.845,1.094,4.024c-0.183,0.893-0.277,1.814-0.277,2.76c0,7.58,6.144,13.723,13.722,13.723c0.859,0,1.699-0.078,2.515-0.23c1.119,0.604,2.399,0.945,3.762,0.945c4.395,0,7.957-3.562,7.957-7.959C29.605,20.701,29.309,19.502,28.777,18.438zM22.412,22.051c-0.635,0.898-1.573,1.609-2.789,2.115c-1.203,0.5-2.646,0.754-4.287,0.754c-1.971,0-3.624-0.346-4.914-1.031C9.5,23.391,8.74,22.717,8.163,21.885c-0.583-0.842-0.879-1.676-0.879-2.479c0-0.503,0.192-0.939,0.573-1.296c0.375-0.354,0.857-0.532,1.432-0.532c0.471,0,0.878,0.141,1.209,0.422c0.315,0.269,0.586,0.662,0.805,1.174c0.242,0.558,0.508,1.027,0.788,1.397c0.269,0.355,0.656,0.656,1.151,0.89c0.497,0.235,1.168,0.354,1.992,0.354c1.135,0,2.064-0.241,2.764-0.721c0.684-0.465,1.016-1.025,1.016-1.711c0-0.543-0.173-0.969-0.529-1.303c-0.373-0.348-0.865-0.621-1.465-0.807c-0.623-0.195-1.47-0.404-2.518-0.623c-1.424-0.306-2.634-0.668-3.596-1.076c-0.984-0.419-1.777-1-2.357-1.727c-0.59-0.736-0.889-1.662-0.889-2.75c0-1.036,0.314-1.971,0.933-2.776c0.613-0.8,1.51-1.423,2.663-1.849c1.139-0.422,2.494-0.635,4.027-0.635c1.225,0,2.303,0.141,3.201,0.421c0.904,0.282,1.668,0.662,2.267,1.13c0.604,0.472,1.054,0.977,1.335,1.5c0.284,0.529,0.43,1.057,0.43,1.565c0,0.49-0.189,0.937-0.563,1.324c-0.375,0.391-0.851,0.589-1.408,0.589c-0.509,0-0.905-0.124-1.183-0.369c-0.258-0.227-0.523-0.58-0.819-1.09c-0.342-0.65-0.756-1.162-1.229-1.523c-0.463-0.351-1.232-0.529-2.292-0.529c-0.984,0-1.784,0.197-2.379,0.588c-0.572,0.375-0.85,0.805-0.85,1.314c0,0.312,0.09,0.574,0.273,0.799c0.195,0.238,0.471,0.447,0.818,0.621c0.36,0.182,0.732,0.326,1.104,0.429c0.382,0.106,1.021,0.263,1.899,0.466c1.11,0.238,2.131,0.506,3.034,0.793c0.913,0.293,1.703,0.654,2.348,1.072c0.656,0.429,1.178,0.979,1.547,1.635c0.369,0.658,0.558,1.471,0.558,2.416C23.371,20.119,23.049,21.148,22.412,22.051z";

	var infoLinke;
	var infoCv;
	var infoPinte;
	var infoMail;

	var setSocialA;
	var setSocialB;
	var setSocialC;

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
		$('#sliderContainer').center();



		// Borde papel
		var borde = paper.rect(0,0,mainOptions.paperwidth, mainOptions.paperheigth)
		.attr({
			'stroke-width':5,
			stroke: 'grey',
			'stroke-opacity': 1,
			opacity: 1,
			fill : colores.naranjita
		});

		butcancel = paper.path(pathbutcancel).attr({
			transform: "t770,0",
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
		
		circuloA.hover( function (e){
			//alert('overa');
		}, function(e){
			//alert('notovera');
		});

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
			opacity:0
		});		

		circle.animate({
			opacity:0.75
		}, "linear",5000);

		var border = paper.circle(x,y,w*0.5)
		.attr({
			"stroke-width": "3px",
			stroke: colores.rojito,
			"stroke-opacity": 0,
			opacity:0
		});

		circle.hover(function(e){
			this.animate({
				opacity:1,
			},"linear",200);					
		}, function(e){
			this.animate({
				opacity:0.75,
			},"linear",200)
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
			showSocial(rx.A-10, ry.A+10, "a");
		}else if (estado === estados.clickCircleB){
			showSocial(rx.B, ry.B, "b");
		}else if (estado === estados.clickCircleC){
			showSocial(rx.C, ry.C, "c");
		}
	}	
	var showSocial = function(x,y, letra){
		
		var difx = 45;

		var _y = y;
		var _x; 

		if (letra === 'a'){
			  _x = x+25;
			  infoMail=  infoButton(_x+difx,_y+5,"mailto:santigesualdo@gmail.com", pathMail, false);
			  infoLinke= infoButton(_x+difx*2,_y+5,"https://www.linkedin.com/in/santiago-gesualdo-a464b442", pathLinke,false);
			  setSocialA = paper.set();
			  setSocialA.push(infoLinke);
			  setSocialA.push(infoMail);
		} 
		else if (letra === 'b'){		
			  _x = x+35;
			  infoMail=  infoButton(_x+difx,_y+5,"mailto:gabobaruka_07@gmail.com", pathMail);
			  setSocialB = paper.set();
			  setSocialB.push(infoMail);
		}else
		if (letra === 'c'){
			  _x = x+35;
			  infoMail = infoButton(_x+difx-200,_y+5, "mailto:jo.pgimenez@gmail.com", pathMail);
			  setSocialC = paper.set();
			  setSocialC.push(infoMail);
		}
	}
	var infoButton = function(x,y,link, pathBoton,isDiv){
		var rect = paper.rect(0,0,32,32)
		.attr({
			opacity: 1,
			fill : colores.naranjita,
			'stroke-opacity':0
		});

		var but = paper.path(pathBoton).attr({
			'stroke-opacity':0,
			'fill-opacity': 1 , 
			'fill': "white",
			'opacity':0
		});

		var set = paper.set();
		set.push(but);
		set.push(rect);
		set.translate(x,y);

		set.animate({
			opacity:1
		},1000,"linear")
		.hover(function(e){
			but.animate({
				fill: 'black'
			},100, "linear");
		}, function(e){
			but.animate({
				fill: 'white'
			},100, "linear");
		});

		if (isDiv){
			set.mousedown(function(e){
				alert('#'+link);
				$('#'+link)[0].click();
			});
		}else{
			set.mousedown(function(e){
				window.open(link);
			});				
		}

			
	
			

		return set;
	}
	var desaparecerRecuadro = function(){
		
		if (recuadroContenido!=undefined){
			recuadroContenido.attr({
				'stroke-opacity':0,
				opacity:0
			});			
		}

		$('#jssor_1').css("display","none");
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
		if (exist(contentLineA)){contentLineA.remove();}
		if (exist(contentLineB)){contentLineB.remove();}
		if (exist(contentLineC)){contentLineC.remove();}
		if (exist(infoCurve1)){infoCurve1.remove();}		
		if (exist(infoCurve2)){infoCurve2.remove();}		
	}
	var contenidoA = function(){

		limpiarTextos();

		var mostrarSlider = function(e){
			//var url = 'sliderNuevo.html';
			//$('#contentiframe').prop('src', url);
			$('#jssor_1').css( "display", "inline");
		};	

		var pathString = "m "+rx.A+","+ry.A +" l 200,0";

		/*butinfo.animate({
			transform: "t245,-40 s0.15",
			opacity:1
		},1000,"backOut").toFront();*/

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
	        				showSocial(rx.A, ry.A, "a");
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

		/*butinfo.animate({
			transform: "t440,-40 s0.15",
			opacity:1
		},1000,"backOut")
		.toFront();*/

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
	        				showSocial(rx.B, ry.B, "b");
						}
		);	
	}
	var contenidoC = function(){

		limpiarTextos();
		var mostrarSlider = function(e){
			//var url = 'sliderNuevo.html';
			//$('#contentiframe').prop('src', url);
			$('#jssor_1').css( "display", "inline");
		};	

		
		/*butinfo.animate({
			transform: "t535,-40 s0.15",
			opacity:1
		},1000,"backOut")
		.toFront();	*/

		
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
	        				showSocial(rx.C, ry.C, "c");
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

		if (exist(infoLinke)) infoLinke.remove();
		if (exist(infoCv)) infoCv.remove();
		if (exist(infoMail)) infoMail.remove();
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