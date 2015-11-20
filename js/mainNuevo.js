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
	posInicial.X = 300;
	posInicial.Y = 50;
	posInicial.difX = 100;
	posInicial.sizeCircle = 25;

	var estados ={};
	estados.inicio = "inicio";
	estados.clickCircleA = "clickA";
	estados.clickCircleB = "clickB";
	estados.clickCircleC = "clickC";

	var textoCentral={};
	textoCentral.x = 400;
	textoCentral.y = 225;
	textoCentral.santi1 ="Programacion & Diseño";
	textoCentral.gabo1 = " Audio & Composicion ";
	textoCentral.jose1 = "    Arte & Diseño    ";
	textoCentral.santi2 = "Santiago Gesualdo";
	textoCentral.santi3 = "( Programing & Design )";

	
	textoCentral.gabo2 = "Gabriel Barukel";
	textoCentral.gabo3 = " ( Audio & Composiyon )";

	
	textoCentral.jose2 = "Josefina Gimenez";
	textoCentral.jose3 = "( Art & Design)";

	textoCentral.t1;
	textoCentral.t2;
	textoCentral.t3;


	var estado = "";

	//
	var setSantiContent=null;
	var setJoseContent=null;

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

	var clicked ;

	var circuloA;
	var circuloB;
	var circuloC;

	var circuloALine1Path = "m 253,155 c 0.17662,0.1027743 -4.17636,11.2721463 -17.6551,27.8349388 0.58757,32.845288 0.7426,84.260814 0.36499,152.089754 88.1009,-0.35411 200.20503,-0.57485 322.88826,-0.59562 -5.7e-4,-6.21795 -6.2e-4,-12.46289 -1.2e-4,-18.73338 0.004,-45.91135 0.0361,-90.431283 0.0934,-132.925148 -94.50969,-0.403301 -163.82326,-0.708863 -233.43743,-0.85385 6.66284,-7.092863 10.63824,-16.73106526 11.33379,-26.1194254 1.16758,-9.3524576 -1.61842,-18.6745656 -6.61384,-25.5316646 -5.70199,-7.856283 -14.26525,-12.699391 -22.50067,-14.286625 -10.01629,-1.946149 -19.67278,0.662413 -26.54557,4.952032 -6.81698,4.215446 -11.93577,10.606185 -15.35496,15.414268 -2.99077,4.219284 -8.12524,12.605808 -9.06931,14.073679 -2.07315,3.223412 -3.28515,4.8080839 -3.50347,4.6810412 -0.21494,-0.1250705 -1.56819,-2.9540982 z";//2.21344,-5.4001662 1.27321,-2.666817 4.48435,-9.3337757 7.95297,-14.94 3.20003,-5.195371 8.20476,-12.131063 15.55335,-17.193374 7.45742,-5.0951 18.09761,-8.447897 29.63702,-6.599306 9.50163,1.534973 19.43093,6.735039 26.36011,15.755672 6.05321,7.905018 9.56915,18.621995 8.43512,29.8167107 -1.38502,9.1909366 -6.69232,18.3748753 -15.58795,24.5277723 70.32099,-0.821018 140.56467,-1.802396 235.93756,-3.123228 0.0573,45.089265 0.0898,92.577812 0.0934,141.522802 5e-4,6.68418 4.5e-4,13.34028 -1.2e-4,19.96597 -126.65297,-0.0208 -242.22824,-0.24149 -331.69058,-0.59562 -0.37779,-71.23036 -0.22241,-124.104244 0.36499,-157.016936 14.46049,-16.64726242 19.85574,-27.2224097 20.73066,-26.7132968 z";
	var circuloALine1;

	var circuloALine2Path = "m 340,165 c 0.14932,0.1547672 -2.71594,4.215571 -10.24572,9.7842801 -7.18121,5.310925 -19.99573,12.764372 -37.46121,15.21547 -14.79938,1.872525 -33.82554,-0.351389 -51.54752,-11.573821 0.35389,43.9702 0.79516,91.052508 1.40592,152.102808 0,0 0,3e-5 0,3e-5 78.39506,-0.21825 169.25154,-0.34344 266.21612,-0.34344 19.40487,0 38.56853,0.005 57.44168,0.0148 0.0355,-53.34375 0.1099,-104.337608 0.21585,-151.799716 -49.19917,-0.300353 -92.37529,-0.522326 -132.68224,-0.641264 5.37884,-6.578755 8.75871,-14.9540741 9.67133,-23.3482259 1.41677,-7.9320011 0.006,-16.0974311  -3.42376,-22.7803491 -3.73001,-7.290866 -9.86829,-12.949295 -16.62908,-16.194377 -7.54342,-3.631391 -15.93549,-4.36521 -23.23985,-2.877352 -6.63115,1.326448 -12.64944,4.509428 -17.61609,8.067919 -5.75013,4.126499 -10.6451,9.226352 -14.59248,13.742106 0,0 -10e-6,1.2e-5 -10e-6,1.2e-5 -15.65526,17.955016 -7.47404,10.491698 -19.52809,23.4915977 -4.78451,5.1599443 -7.77538,7.3566621 -7.98485,7.1395422 -0.26478,-0.2744453 z";//2.25209,-2.9406141 6.46355,-8.4250581 -6.86425,8.9390699 21.05262,-28.3968088 18.08642,-24.6750568 0,0 1e-5,-1.3e-5 1e-5,-1.3e-5 3.8362,-4.825429 8.7227,-10.325269 14.75665,-15.014465 5.21065,-4.055011 11.7221,-7.749499 19.26907,-9.539545 8.35369,-1.953876 17.98421,-1.402135 26.92543,2.619814 8.01322,3.61395 15.31328,10.007684 19.94452,18.578345 4.24288,7.872031 6.11522,17.447802 4.59728,27.0436929 -1.82301,7.9481017 -6.6453,15.6349621 -14.14131,21.1458931 40.88409,-0.808046 84.73051,-1.768893 134.66224,-2.910644 0.10596,50.117501 0.18031,104.433694 0.21585,161.347584 -19.43358,0.01 -39.18325,0.0148 -59.1884,0.0148 -100.00606,0 -193.71292,-0.12519 -273.75296,-0.34344 0,0 0,-4e-5 0,-4e-5 0.61276,-64.85703 1.05003,-113.665475 1.40592,-159.024118 18.271,9.683342 37.51452,11.565892 52.52077,9.825783 16.611,-1.67956 29.32288,-8.156977 36.70283,-12.750467 7.73151,-4.8123032 11.14179,-8.2976327 11.53213,-7.8930451 z";
	var circuloALine2;

	var circuloALine3Path = "m 477,125 c 0.24341,0.196549 -1.0499,1.869513 -2.74963,5.462195 -2.09842,4.435361 -3.28423,8.336674 -5.5359,16.851432 -1.52627,5.904009 -3.88479,15.1989856 -8.65235,22.98200088 -3.98191,6.45499122 -10.36934,12.77716412 -19.03475,16.35887712 -7.63391,3.08433 -15.80257,3.715832 -24.63651,3.782851 -48.29109,0.273015 -108.97663,0.05559 -182.68767,-0.62351 -0.18426,46.659262 -0.42706,97.347748 -0.72643,150.954648 38.71338,0.18071 78.9013,0.38839 120.142,0.62256 84.22388,0.47822 164.12725,1.01746 235.78087,1.57562 0,0 0,-4e-5 0,-4e-5 0.1532,-63.81992 0.26351,-113.617352 0.32489,-162.9001157 -5.69927,3.9821827 -12.16635,5.9184097 -18.36553,5.9620407 -7.44288,-0.448484 -14.40499,-2.980424 -20.10641,-6.8747687 -6.63041,-4.5575013 -11.46851,-10.7865727 -14.63875,-17.1971398 -3.29773,-6.6962905 -5.31961,-14.5001065 -7.21828,-20.3065315 -2.44343,-7.279646 -5.07848,-13.247331 -9.36921,-17.72136 -6.14204,-6.525959 -14.57874,-8.761901 -20.98194,-8.566095 -7.5821,0.219963 -13.42702,3.525313 -16.56408,5.744781 -3.36915,2.383673 -4.70345,4.116125 -4.98032,3.892555 ";//-0.11547,-0.09324 0.80692,-2.165617 4.03263,-5.073707 2.99655,-2.701497 8.93666,-6.766258 17.33281,-7.515116 7.10001,-0.623023 16.65392,1.354964 24.1009,8.620604 5.05543,5.011494 8.35643,11.518071 11.03733,19.020906 2.17847,5.954142 4.37032,13.551947 7.50378,19.39345 2.99908,5.6151117 7.37631,10.99491485 13.09867,14.6847112 4.89178,3.1781684 10.85766,5.1869689 17.07827,5.4253984 6.59687,0.6872797 13.54492,-0.1459448 19.86529,-2.5465974 0.673,51.1882198 1.39166,102.6627748 2.34519,170.4501648 0,0 0,4e-5 0,4e-5 -73.16407,-0.25315 -155.31597,-0.62178 -241.92743,-1.10062 -42.40124,-0.23442 -83.70268,-0.48327 -123.39862,-0.74182 0.42023,-57.20936 0.85637,-111.083127 1.29387,-160.172346 75.85653,-0.679148 138.00731,-0.896474 187.02817,-0.623512 8.67813,0.06706 16.1095,-0.171015 22.83101,-2.746347 7.64369,-2.8484714 13.58528,-8.310851 17.42055,-13.983811 4.62655,-6.795068 7.39678,-15.841889 9.27523,-21.594915 2.6086,-8.145174 4.49682,-12.720588 7.03597,-16.748256 2.20711,-3.500993 3.8964,-4.869328 4.04638,-4.748227 z";
	var circuloALine3;

	var recuadroContenido ; 

	var circleTagsTime = 1000;

	var offsetY = 0;

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
			transform: "t0,0 s0.2",
			fill:"black",
			'stroke-width': 2,
			'stroke-opacity': 0.2,
			stroke: "white",
		})
		.hover(function(e){
			butinfo.attr({
				'stroke-opacity': 1,
			});
		}, function(e){
			butinfo.attr({
				'stroke-opacity': 0.2,
			});
		}).toBack();



		var posInicialX = posInicial.X;
		var posInicialY = posInicial.Y;

		var difX = 100;

		var sizeCircle = 25;

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

	var clickRestart = function(){
			
			circuloA.toFront();
			circuloB.toFront();
			circuloC.toFront();

			circuloA.animate({
				transform: "t0,0"
			}, 1000,"backOut");

			circuloB.animate({
				transform: "t0, 0"
			}, 1000,"backOut");

			circuloC.animate({
				transform: "t0, 0"
			}, 1000,"backOut");

			butinfo.toBack();

			desaparecerRecuadro();

			estado = estados.inicio;
	}	
	
	var circuloAclick = function(){
		
		if ( estado != estados.clickCircleA) {
			desaparecerRecuadro();
		}
		
			if (estado == estados.inicio){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-250, 0"
				}, 1000,"backOut");

				circuloB.animate({
					transform: "t250, "+offsetY 
				}, 1000,"backOut", crearPantalla("a"));

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1000,"backOut");
			}else 
			if (estado == estados.clickCircleB){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-250, 0"
				}, 1000,"backOut",crearPantalla("a"));

				circuloB.animate({
					transform: "t250, "+offsetY
				}, 1000,"backOut");

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1000,"backOut");				
			}else 
			if (estado == estados.clickCircleC){
				estado = estados.clickCircleA;
				circuloA.animate({
					transform: "t-250, 0"
				}, 1000,"backOut",crearPantalla("a"));

				circuloB.animate({
					transform: "t250, "+offsetY
				}, 1000,"backOut");

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1000,"backOut");				
			}
	}
	var circuloBclick = function(){
		if ( estado != estados.clickCircleB) {
			desaparecerRecuadro();
		}
			if (estado == estados.inicio){
				estado = estados.clickCircleB;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1200,"backOut",crearPantalla("b"));

				setTextoCentralFade();

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1200,"backOut");
			} else
			if (estado == estados.clickCircleA){
				estado = estados.clickCircleB;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1200,"backOut");

				circuloB.animate({
					transform: "t0, 0"
				}, 1200,"backOut",crearPantalla("b"));

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1200,"backOut");				
			}else
			if (estado == estados.clickCircleC){
				estado = estados.clickCircleB;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1200,"backOut",crearPantalla("b"));

				circuloB.animate({
					transform: "t-0, 0"
				}, 1200,"backOut");

				circuloC.animate({
					transform: "t240, "+offsetY
				}, 1200,"backOut");		
			}
	}
	var circuloCclick = function(){
		if ( estado != estados.clickCircleC) {
			desaparecerRecuadro();
		}
			if (estado == estados.inicio){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloB.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloC.animate({
					transform: "t240, 0"
				}, 1000,"backOut",crearPantalla("c"));
			}else 
			if (estado == estados.clickCircleA){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloB.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloC.animate({
					transform: "t240, 0"
				}, 1000,"backOut",crearPantalla("c"));				
			}else 
			if (estado == estados.clickCircleB){
				estado = estados.clickCircleC;
				circuloA.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloB.animate({
					transform: "t-250, "+offsetY
				}, 1000,"backOut");

				circuloC.animate({
					transform: "t240, 0"
				}, 1000,"backOut",crearPantalla("c"));				
			}
	}

	var crearPantalla = function(circulo){

		var colorRelleno;
		var colorLinea = "black";
		if (circulo=="a"){
			colorRelleno = "red";			
		}else
		if (circulo=="b"){
			colorRelleno = "yellow";
		}else
		if (circulo=="c"){
			colorRelleno = "green";
		}

		recuadroContenido = paper.rect( 10,110, 780,480,10)
		.attr({
			stroke: "black",
			'stroke-opacity':0,
			'stroke': colorLinea , 
			'fill-opacity': 0,
			'fill': colorRelleno
		}).animate({
			'stroke-opacity':1,
			'fill-opacity': 1,
		},1000, crearContenido(circulo));
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
		if (circulo == "a"){
			circuloA.toFront();	
			contenidoA();
		}else 
		if (circulo == "b"){
			circuloB.toFront();	
			contenidoB();
		}
		if (circulo == "c"){
			circuloC.toFront();	
			contenidoC();
		}	
	}

	var contenidoA = function(){

		butinfo.animate({
			transform: "t20,-50 s0.2"
		},1000,"backOut", function(e){
			var url = 'slider.html';
			$('#contentiframe').prop('src', url);
			$('#contentiframe').css( "display", "inline");
		}).toFront();		
	}

	var contenidoB = function(){

		butinfo.animate({
			transform: "t230,-50 s0.2"
		},1000,"backOut").toFront();

	}
	var contenidoC = function(){
		butinfo.animate({
			transform: "t570,-50 s0.2"
		},1000,"backOut").toFront();	
	}

	var createCircle = function( id, x , y , r , color, text1, text2, text3) {
		
		/*var circle = paper.circle(x, y, r)
		.attr({ fill: color, 'stroke-width':2, opacity: 0})
		.hover(function(e){
			circle.attr({ opacity: 1 });
			setTextoCentral(id,text1,text2,text3);
		}, function(e){
			circle.attr({ opacity: 0.5 });
			setTextoCentralFade();
		});*/

		var circle;
		var w = 52;

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
			},"linear",200)					
			setTextoCentral(id,text1,text2,text3);
		}, function(e){
			this.animate({
				opacity:0.5
			},"linear",200)
			setTextoCentralFade();
		});		

		return circle;
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