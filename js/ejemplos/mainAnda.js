var main=(function(){
	var options={};
	options.time = 500;
	options.opacity = 0.5;
	options.texto = "Texto";
	options.entero = 100;	
	options.color="green";
	options.color2="black";
	options.paperwidth = 800;
	options.paperheigth = 600;

	animated = false;

	var p1;
	var text;
	var paper;
	var set;

	// var pathCOORD = "m10,10l30,40l150,80z";
	var pathCOORD = "m 50.886437,78.28176 c -20.896,0.7679 -37.914378,-21.7282 -31.462367,-41.62843 3.388196,-13.59929 18.168143,-24.86904 31.462367,-23.31599 -10e-7,21.64814 -10e-7,43.29632 0,64.94442 z";
	var path2COORD ="m -25.569942,80.42834 a 32.70369,32.70369 0 0 1 -28.322226,-16.3519 32.70369,32.70369 0 0 1 0,-32.70365 32.70369,32.70369 0 0 1 28.322226,-16.35185 l 0,32.7037 z"; 		

	var init=function(){
		
		//alert(options.paperwidth + 'x'+options.paperheigth );

		paper= Raphael(document.getElementById("paper1"),  options.paperwidth , options.paperheigth );

		var borde = paper.rect(0,0,paper.width, paper.height);
		borde.attr({'stroke-width': 3, stroke: "black", fill:"lightsteelblue"});
		borde.toBack();
				
		p1 = paper.path(pathCOORD).attr({
			transform: "t100,100 s3",
			fill:"black",
			stroke: options.color,
			'stroke-width': 3,
			opacity:options.opacity,			
		});

		

		p1.click(function(e){
			animar();
		});
	
		text = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
		text.attr({opacity:0});
		
		set = paper.set();
		set.push(borde);
		set.push(p1);
		set.push(text);
	}
	
	var animar = function(){				
		if (!animated){
			p1.animate({path: pathCOORD, transform: "t100,100 r180 s3", opacity: options.opacity}, 	options.time, 	"linear"); 	
			text.animate({opacity:0, text:"path2COORD"}, options.time, "<");
		}else{
			p1.animate({path: pathCOORD, transform: "t100,100 r360 s3", fill:"black", stroke: options.color, 'stroke-width': 3, opacity: options.opacity}, options.time, "linear");
			text.animate({opacity:1,text:"pathCOORD"}, options.time, ">");
		}		
		animated = !animated;
	};

	return {
		init: init,
		animar: animar,
		options: options
	}
}());




