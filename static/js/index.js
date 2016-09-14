/*
do svg stuff here
*/

$(document).ready(function(){
	
	/*
	window.setTimeout(function(){
		var _w = $("#svg").width();
		var _h = $("#svg").height();
		$("#svg").attr("width", _w);
		$("#svg").attr("height", _h);

		var svgns = "http://www.w3.org/2000/svg";
		for(var i = 0; i < 10; i++){
			var rect = document.createElementNS(svgns, 'rect');
			rect.setAttributeNS(null, 'x', _w/10 * i);
	        rect.setAttributeNS(null, 'y', 0);
	        rect.setAttributeNS(null, 'height', _h);
	        rect.setAttributeNS(null, 'width', _w/10);
	        rect.setAttributeNS(null, 'fill', '#212121');
	        rect.setAttributeNS(null, 'fill-opacity', 0.2);
	        document.getElementById('svg').appendChild(rect);
		}

		$("#svg rect").velocity("transition.slideRightIn",{
			stagger: 100
		});
	}, 500);
	*/
	
	$("#tabs").velocity("transition.slideDownIn");
});

$(".champ").each(function(i){
	var champ = $(this).attr("data-champ");
	if(champ === "Wukong"){
		champ = "Monkey King"; //weirdness	
	}
	champ = champ.split(" ").join("").split("'").join("");
	$(this).attr("src","http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/"+champ+".png")
});