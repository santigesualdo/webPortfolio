// EJEMPLO 3
$(function() { 
	/* create a paper - commented for Run */
	var paper = Raphael($("#paper1"),0,0, 400, 400);
	
	var img1 = paper.image("images/shape1.png", 0,0, 400, 400);
	var img3 = paper.image("images/shape2.png", 400,400, 50, 100);
	var img2 = paper.image("images/shape3.png", 400,400, 100, 110);  

});

