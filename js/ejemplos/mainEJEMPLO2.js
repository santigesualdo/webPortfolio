// EJEMPLO 2
$(function() { 
	/* create a paper - commented for Run */
	var paper = Raphael($("#paper1"), 400, 400);

	var rect1 = paper.rect(20,30,100,12).attr({fill: "orange"});
	var ellipse1 = paper.ellipse(120,130,40,30).attr({fill: "red"});
	var circle1 = paper.circle(160,50,40).attr({fill: "yellow"});
	var path1 = paper.path("m10,10l30,40l150,80z").
		attr({fill: "green", "stroke-width": 2});

	var set1 = paper.set();
	set1.push(rect1, ellipse1, circle1);
	set1.attr({"stroke": "purple", 
		"stroke-width": 3, "stroke-dasharray": "."});

});

