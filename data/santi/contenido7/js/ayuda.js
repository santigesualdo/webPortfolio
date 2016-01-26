/**
 * @constructor
 * @param
 * {posX} posicion en X
 * {posY} posicion en Y
 * {SC} referencia a la escena 
 * {SM} referencia a SpriteManager 
 * {AC} referencia a ActorContainer
 * 
 * Para el vuelo del pajaro:
 * {Tm} Tiempo minimo para salir volando 
 * {TM} Tiempo maximo para salir volando
 * {Tvuelo} Tiempo para volar fuera de la escena
 * 
 * **/

function pajarito(posX,posY,SC,SM,AC,Tm,TM,Tvuelo){
	
	
	/** atributos privados **/
	
	//tamano del pajarito
	var sizeX = 44;
	var sizeY = 40;
	
	var imageTransformation = 0;
	//radio del alcance del evento cuando suelta el mouse
	var radio = 30;

    var positionX = posX;
    var positionY = posY;
    
	/** atributos publicos**/

    
    this.Px = posX;
    this.Py = posY;
	
    //** el actor que contiene el pajarito **//
    
    
    var ShapAct2 = new CAAT.Actor().
    setBackgroundImage(SM,true).
    playAnimation("volando").
	setDiscardable(true).
    setImageTransformation(imageTransformation).
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    setSize(sizeX, sizeY).
    enableEvents(false);
    
    
    // Defino la ruta de escape
    
    /********************  ALGUNAS VARIABLES ALEATORIAS *******************/
    
    //Punto de control de la curva de escape
    //el punto X es el variable, el Y es fijo
    var xpath = Math.random() * (500);
    var ypath = 20;
    
    //Punto de salida de la curva
    //el punto Y es fijo = -size (para que se vaya de la escena), el punto X es -size o 500+size
    var xfinal = (Math.random()<0.5)? -sizeX-200 : 500+sizeX;
    imageTransformation = (xfinal<0)? 0 : 1;
    
    var yfinal = -sizeY;
    
    //vida del path Beah, tiempo de inicio es aleatorio entre tm y TM segundos
    var tiempo_inicio = Math.round(Math.random() * (TM - Tm) + Tm);
    
    /*****************************************************************************/
    
    /****** LA CURVA DE ESCAPE ***************************************************/
    
    // de la curva de escape, el primer punto es el pajarito
    // el del medio es random
    // el ultimo son dos esquinas, o la superior derecha o la superiror izquierda
    // el tiempo de vida del beha es a partir de los 2 segundos hasta los 6, luego va cambiando en los eventos
    
    
    var path_behavior= new CAAT.PathBehavior().
    setPath(
    		new CAAT.PathUtil.Path().
    		beginPath(ShapAct2.x,ShapAct2.y).
    		addQuadricTo( xpath,ypath, xfinal,yfinal).
    endPath()
    ).
  setFrameTime(tiempo_inicio,Tvuelo).
    setCycle(false).
    setTranslation( sizeX/2,sizeY/2 ).
    // rota el actor a medida que atraviesa el path
    setAutoRotate(false);
    
    ShapAct2.addBehavior(path_behavior);
    
    /********************************************************* *******************/
    
    
    
    /******************** EVENTOS Y ACCIONES SOBRE EL PATHBEHA  *******************/
    
    
    var punto = new CAAT.ShapeActor().
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    setSize(radio*2, radio*2).setAlpha(0).
    setFillStyle( '#ccf' ).enableEvents(false);
    
    AC.addChild(punto);
    
    /* Cuando empieza le habilito los eventos al actor y le defino los eventos */
    
    path_behavior.addListener({
    	behaviorApplied : function(behavior, time, actor){

    		//habilito eventos
    		ShapAct2.enableEvents(true).
    		setImageTransformation(imageTransformation).
    		playAnimation("huida");
    		
    			//defino el drag para el actor
  				 ShapAct2.mouseDrag = function(mouseEvent){
			    	
  					 
  					 //termino el PathBeha
  					behavior.setOutOfFrameTime();
  					//Ahora el actor sigue el mouse
  					ShapAct2.setLocation(mouseEvent.screenPoint.x-(sizeX*0.5),mouseEvent.screenPoint.y-(sizeY*0.5));
  					ShapAct2.setImageTransformation(0);
  					punto.setAlpha(0.5);
  			    };
  						 
  						   
  				// Defino el mouseUP para cuando suelto el pajarito		    
  				ShapAct2.mouseUp = function(mouseEvent){
  				    	
  					punto.setAlpha(0);
  					
  					// Si esta dentro del radio
  					if(Math.abs(mouseEvent.screenPoint.x - positionX) < radio && Math.abs(mouseEvent.screenPoint.y - positionY) < radio){
  						
  						//Lo fijo y redefino el path  						
  						
  					    var xpath = Math.random() * (500);
  					    var ypath = 20;
  					    var xfinal = (Math.random()<0.5)? -sizeX : 500+sizeX;
  					    imageTransformation = (xfinal<0)? 0 : 1;
  					    var yfinal = -sizeY;
  					    var tiempo_inicio = Math.round(Math.random() * (TM - Tm) + Tm);
  					    tiempo_inicio *= Math.pow(0.95,SC.time/10000);
  					    
  						ShapAct2.setLocation(positionX-sizeX*0.5, positionY-sizeY*0.5).
  					//	setImageTransformation(imageTransformation).
  						playAnimation("volando").
  						enableEvents(false);
  						
  						path_behavior.setPath(
  					    	    new CAAT.PathUtil.Path().
  					    	    	beginPath(positionX-sizeX*0.5, positionY-sizeY*0.5).
  					    	    	addQuadricTo( xpath,ypath, xfinal,yfinal).
  					    	    endPath()).
  					    	    setFrameTime(SC.time+tiempo_inicio,Tvuelo * Math.pow(0.95,SC.time/10000));
  						
  					}
  					else{
  						
  						
  						// sino, el pajaro se va volando nuevamente y redefino el path
  						//ahora el pajaro se va mas rapido
  						
  					    var xpath = Math.random() * (500);
  					    var ypath = 20;
  					    var xfinal = (Math.random()<0.5)? -sizeX : 500+sizeX;
  					    var yfinal = -sizeY;
  					    
  					  ShapAct2.playAnimation("huida");
  					    
  						path_behavior.setPath(
  					    	    new CAAT.PathUtil.Path().
  					    	    beginPath(mouseEvent.screenPoint.x, mouseEvent.screenPoint.y).
  					    	   addQuadricTo( xpath,ypath, xfinal,yfinal).
  					    	    endPath()
  					    	    ).setFrameTime(SC.time,Tvuelo * Math.pow(0.90,SC.time/10000));
  					}
  			        
  			        
  				}; 
					
			        

        }});
    
    
    path_behavior.addListener({
    	behaviorExpired : function(behavior, time, actor){
    		cantPajaros-=1;
    		ShapAct2.setOutOfFrameTime();
    		path_behavior.emptyListenerList();
    		    	    	
    	}
    });
    
    /******************************************************************************************/
    
    AC.addChild(ShapAct2);

    
}
function ballena(posX,posY,SC,SM,AC){
	/** atributos privados **/
	var sizeX = 380;
	var sizeY = 195;
	
	var imageTransformation = 0;

    var positionX = posX;
    var positionY = posY;    
	/** atributos publicos**/    
    this.Px = posX;
    this.Py = posY;	
    //** el actor que contiene de la ballena**//
    
    var ShapeBallena = new CAAT.Actor().
    setBackgroundImage(SM,true).
    setImageTransformation(imageTransformation).
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    enableEvents(false).
    setSize(sizeX, sizeY);
    
    var ani_behavior = new CAAT.GenericBehavior().
    setCycle(true).
    setFrameTime(0,250).
    addListener({
    	behaviorApplied : function (actor){
    		if (cantPajaros<3){
    			ShapeBallena.enableEvents(false).   	
    			playAnimation("panico");
    		}else if (cantPajaros<6){
    			ShapeBallena.enableEvents(false).
    			//ShapeBallena.py = this.py -10;
    			playAnimation("alterada");
    		}else if (cantPajaros<9){
    			ShapeBallena.enableEvents(false).
    			//ShapeBallena.py = this.py -10;
    			playAnimation("tranquila");
    		}

    		
    	}
    });  
    //setFrameTime(2000, 5000);
    // setear el AlphaBehavior al rectangulo
    var alpha_1 = new CAAT.AlphaBehavior().
    setValues(1, 0);
    
    ShapeBallena.addBehavior(ani_behavior);
    ShapeBallena.addBehavior(alpha_1);
    
    AC.addChild(ShapeBallena);
}
function red(posX,posY,SC,SM,AC){
	
	/** atributos privados **/
	var sizeX = 132;
	var sizeY = 142;
	
	//var imageTransformation = 0;

    var positionX = posX;
    var positionY = posY;    
	/** atributos publicos**/    
    this.Px = posX;
    this.Py = posY;	
    //** el actor que contiene de la ballena**//
    
    var ShapeRed = new CAAT.Actor().
    setBackgroundImage(SM,true).
    setDiscardable(true).
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    setSize(sizeX, sizeY).
    enableEvents(false);          
    
    var alpha_0 = new CAAT.AlphaBehavior().
    setValues(0, 0);
    
    var behaviorRed = new CAAT.GenericBehavior().
    setFrameTime(0,1000).
    setCycle(true).
    addListener({
    	behaviorApplied: function (actor,behavior){
    		if (cantPajaros==0){
    			ShapeRed.setOutOfFrameTime();
    		}
    	}
    });
    //setFrameTime(2000, 5000);
  // setear el AlphaBehavior al rectangulo
    
    ShapeRed.addBehavior(behaviorRed);
    ShapeRed.addBehavior(alpha_0);

    AC.addChild(ShapeRed);
	
}
function hilos(posX,posY,SC,SM,AC){

	
	
	//var imageTransformation = 0;
	
	sizeX= 257;
	sizeY= 284;
	
    var positionX = posX;
    var positionY = posY;    
    
	/** atributos publicos**/    
    this.Px = posX;
    this.Py = posY;	
    //** el actor que contiene de la ballena**//
    
    var ShapeHilos = new CAAT.Actor().
    setBackgroundImage(SM,true).
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    setDiscardable(true).
    setSize(sizeX, sizeY).
    enableEvents(false); 
    
    var behaviorHilos = new CAAT.GenericBehavior().
    setFrameTime(0,1000).
    setCycle(true).
    addListener({
    	behaviorApplied: function (actor,behavior){
    		if (cantPajaros==0){
    			ShapeHilos.setOutOfFrameTime();
    		}
    	}
    });
   
    ShapeHilos.addBehavior(behaviorHilos);

    AC.addChild(ShapeHilos);
	
}
function olas(posX,posY,SC,SM1,SM2,SOver,AC){
	
	sizeX = 600;
	sizeY = 600;
		
	var positionX = posX;
	var positionY = posY;
	
	this.Px = posX;
	this.Py = posY;
	//declaro actor ola blanca que iria en el fondo
    var Ola2 = new CAAT.Actor().
    setBackgroundImage(SM1,true).
    setLocation(positionX-sizeX/2, positionY-sizeY/2).
    setSize(sizeX, sizeY).
    enableEvents(false); 
	//declaro actor ola naranja que iria en el fondo    
    var Ola1 = new CAAT.Actor().
    setBackgroundImage(SM2,true).
    setLocation(positionX-sizeX/2, positionY+10-sizeY/2).
    setSize(sizeX, sizeY).
    enableEvents(false); 
   
    pospx = -20;
    pospy = posY-230;
    
    //path que define el movimiento de las olas
	var path= new CAAT.Path().
    beginPath(pospx,pospy-5).
    //addCubicTo( pospx-20,pospy-5,   pospx+20,pospy+5 ,   pospx,pospy+5 ).
    //addCubicTo( pospx-20,pospy+5,   pospx+20,pospy+5 ,  pospx,pospy-5  ).
    addCubicTo( pospx,pospy-5,   pospx+10,pospy ,   pospx+20,pospy-5 ).
    addCubicTo( pospx+20,pospy-5,   pospx+10,pospy ,  pospx,pospy-5  ).
    endPath();
	
	var path2= new CAAT.Path().
    beginPath(pospx-10,posY-240).
    addCubicTo( pospx-10,posY-240, pospx-30,posY-245 , pospx-10,posY-240).
    addCubicTo( pospx-10,posY-240, pospx-30,posY-245 , pospx-10,posY-240).
    endPath();
    
	/*beginPath(this.px,this.Py-100).
    addCubicTo( this.px,this.Py-200, this.px,this.Py -300 , this.px,this.Py  -400).
    addCubicTo( this.px,this.Py -500, this.px,this.Py-600 , this.px,this.Py-700).
    endPath();*/
		
	var path_behaviorOlas= new CAAT.PathBehavior().
    setPath( path ).
    setFrameTime(0,3000).
    setCycle(true).
    setAutoRotate( false ).
    setTranslation(Ola1.width/2, Ola1.height/2);
	
	var path_behavior2= new CAAT.PathBehavior().
    setPath( path2 ).
    setFrameTime(0,4000).
    setCycle(true).
    setAutoRotate( false ).
    setTranslation(Ola2.width/2, Ola2.height/2);
			
	Ola1.addBehavior(path_behaviorOlas);
	Ola2.addBehavior(path_behavior2);	
	
	AC.addChild(Ola2);//ola blanca	 	
	AC.addChild(Ola1);//ola naranja
	
	AC.setZOrder(Ola2,1);
	AC.setZOrder(Ola1,2);
	
}  
/*** Crea Escena ***/	
function __makeScene(director){
	  
	var xballena = 200;
	var yballena = 350;
	
	var scene = director.createScene();		
    
	var ActCont = new CAAT.ActorContainer()
	.setBounds(0,0,director.width,director.height).setFillStyle("#71C5C6");
	
	var SolaOver = new CAAT.Foundation.SpriteImage().initialize(director.getImage('olaOver'),1,1);
	
	var Sola1 = new CAAT.Foundation.SpriteImage().initialize(director.getImage('ola1'),1,1);
	
	var Sola2 = new CAAT.Foundation.SpriteImage().initialize(director.getImage('ola2'),1,1); 
	
	var Sred= new CAAT.Foundation.SpriteImage().initialize(director.getImage('red'),1, 1);
		
	var Shilos= new CAAT.Foundation.SpriteImage().initialize(director.getImage('hilos'),1, 1);
	
	var Spajaro= new CAAT.Foundation.SpriteImage().initialize(director.getImage('pajaro'),1, 2).
    addAnimation("volando",   [0,1], 200).
    addAnimation("huida",    	[0,1], 100);
	
	var Sballena= new CAAT.Foundation.SpriteImage().initialize(director.getImage('ballena'),2, 4).
	addAnimation("tranquila" , [0,1,2,3], 500).
	addAnimation("alterada" , [4,5], 250).
	addAnimation("panico" , [6,7], 150);
				   
    // contenedor de los actores de la ballena (pajaros, red, hilos, ballena)
	var ContBallena = new CAAT.ActorContainer().setBounds(0,0,500,480);	
		
    var ContOlas = new CAAT.ActorContainer().setBounds(0,0,500,480);
    
    //ola de game over
	var OlaOver = new CAAT.Actor().
    setBackgroundImage(SolaOver,true).
    setLocation(0,-600).
    setSize(600,600).
    enableEvents(false);   	
	
    new hilos(xballena-50,yballena-80,scene,Shilos,ContBallena);
        
    new ballena(xballena,yballena,scene,Sballena,ContBallena);   
    
    new red(xballena-35,yballena-7,scene,Sred,ContBallena);
    
    new olas(200,700,scene,Sola2,Sola1,SolaOver,ContOlas);    
    
    //Defino path del container
	var path= new CAAT.Path().
    beginPath(25,10).
    addCubicTo( 25,10,   50,20 ,   75,10 ).
    addCubicTo( 75,10,   50,20 ,  25,10  ).
    endPath();
		
	//path gameover
	var gameOverPath = new CAAT.PathUtil.LinearPath().
	setInitialPosition(0,600).
	setFinalPosition(0,-100);
	
	//behavior gameover
	var gameOver = new CAAT.PathBehavior().
	setPath(gameOverPath).
	setCycle(false).
	setTranslation(OlaOver.width/2, OlaOver.height/2);
	
	//Behavior del container
	var path_behaviorCont= new CAAT.PathBehavior().
    setPath( path ).
    setFrameTime(0,3000).
    setCycle(true).
    setAutoRotate( false ).
    addListener({
		behaviorApplied : function (){
			if (cantPajaros==0){
				ContBallena.setLocation(ContBallena.x,ContBallena.y+60);
				path_behaviorCont.setCycle(false);
			}else if (cantPajaros<3){
    			ContBallena.setLocation(ContBallena.x,ContBallena.y+40);
    		}else if (cantPajaros<6){
    			ContBallena.setLocation(ContBallena.x,ContBallena.y+20);
    		}
		},
		behaviorExpired : function(){
			gameOver.setFrameTime( scene.time , 2000 );
		}
	});
	
    new pajarito(xballena-160,yballena-200,scene,Spajaro,ContBallena,2000,10000,2500);  
    new pajarito(xballena-110,yballena-220,scene,Spajaro,ContBallena,5000,12000,3000);
    new pajarito(xballena-70,yballena-200,scene,Spajaro,ContBallena,8000,14000,3500);
    new pajarito(xballena-30,yballena-130,scene,Spajaro,ContBallena,11000,15000,3250);
    new pajarito(xballena,yballena-180,scene,Spajaro,ContBallena,13000,18000,3700);
    new pajarito(xballena+20,yballena-120,scene,Spajaro,ContBallena,15000,19000,2300);
    new pajarito(xballena+70,yballena-180,scene,Spajaro,ContBallena,17000,20000,4000);
    new pajarito(xballena+60,yballena-60,scene,Spajaro,ContBallena,19000,21000,2000);
	
    	
    ContBallena.addBehavior(path_behaviorCont);
    OlaOver.addBehavior(gameOver);	
    
    ActCont.addChild(ContOlas);
    ActCont.addChild(ContBallena);	 
	ActCont.addChild(OlaOver);
    
	scene.addChild(ActCont);

  };	    
  /*** Funcion __init  ***/	
  function __init() {	
    // definimos el director	
    var director = new CAAT.Director().initialize(
    500,
    500,
    document.getElementById('mi_canvas'));		         
			
    //variables globales:
    cantPajaros= 8;
        
    new CAAT.Module.Preloader.ImagePreloader().loadImages(
            [
                {id:'pajaro',    url:'./image/spritepajaro.png'},
                {id:'ballena', url:'./image/spriteballena.png'},
                {id:'hilos', url: './image/hilos.png'},
                {id:'red', url: './image/red.png'},
                {id:'olaOver', url: './image/ola1.png'},
                {id:'ola2', url: './image/ola2.png'},
                {id:'ola1', url: './image/olaSola.png'},              
            ],
            function( counter, images ) {
                director.setImagesCache(images);
                __makeScene(director);
            }
        );
	/*Sprite Manager*/		
			
    // definimos loop del juego
    CAAT.loop(30);
  }
  // llamado a __init		
  __init();
