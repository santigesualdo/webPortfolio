


// EJEMPLO 1
$(function() { 
	/* create a paper - commented for Run */
	var paper = Raphael($("#paper1"), 400, 400);

	/* create an ellipse called ellipse1 */
	var ellipse1 = paper.ellipse(110,80,120,42);

	/* fill the rectangle with orange */
	ellipse1.attr({"fill": "blue", "stroke": "yellow"});

	/* create a text */
	var text1 = paper.text(100,90, "Click me");

	/* sets text font family and size */
	text1.attr({"font-family": "fantasy", "font-size": 24});

	/* group both the ellipse and the text in a single Set shape we call button1 */
	var button1 = paper.set(); 
	button1.push(ellipse1); 
	button1.push(text1);
	button1.attr({cursor: "pointer"});

	/* add a click handler */
	button1.click(function(evt){

		/* animate the ellipse - in two seconds its fill color and its stroke 
		 * width will grow "bouncing". */
		ellipse1.animate({fill:"red", "stroke-width": 10}, 2000, "bounce");
		
		/* also animate the text - syncronized with the eliipse animation the 
		 * text will grow "bouncing too" */
		text1.animateWith(ellipse1, null, {"font-size": 20}, 2000, "bounce");
		
	}); 
});


