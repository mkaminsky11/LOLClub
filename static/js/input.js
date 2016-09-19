$(".input").each(function(i){
	var to_push = "<div class='input-bar'><span></span></div>";
	$(this).append(to_push);
	$(this).find("input,textarea").focus(function(){
		console.log(this);
		$(this).parent().find(".input-bar span").velocity({
			width: "100%"
		});
	});

	$(this).find("input,textarea").blur(function(){
		console.log(this);
		$(this).parent().find(".input-bar span").velocity({
			width: "0"
		});
	});
});