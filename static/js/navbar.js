function toggleTabs(){
	if($("#tabs").css("display") === "none"){
		$("#tabs").css("left", "-100%");
		$("#tabs").css("display","flex");
		$("#tabs").velocity({
			left: 0
		});
	}
	else{
		$("#tabs").velocity({
			left: "-100%"
		},{
			complete: function(){
				$("#tabs").css("display","none");
			}
		});
	}
}

$(window).resize(function(){
	var _h = $("#navbar").height() / 2;
	$("#background").css("top",_h);
});

$("#body").velocity("transition.slideUpIn");