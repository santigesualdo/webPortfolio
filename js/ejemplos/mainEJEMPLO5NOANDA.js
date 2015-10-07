// EJEMPLO 5
$(function() { 
	/* create a paper - commented for Run */
	var paper = Raphael($("#paper1"),0,0, 400, 400);
	
	var font1 = paper.getFont("frutiger");
paper.print(10,100,"Tim Bombadil", font1, 48);
paper.print(10,200,"Tim Bombadil", font1, 58).
attr({"stroke-width": 3, fill: "red", "stroke": "blue"});

});

