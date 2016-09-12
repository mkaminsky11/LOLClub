var themes = {
	Azir: {
		url: "http://news.cdn.leagueoflegends.com/public/images/are/img/ar-wallpaper.jpg",
		color: "#eac75e"
	},
	SKT_T1: {
		url: "http://i.imgur.com/LNvlDah.jpg",
		color: "#418ec1"
	},
	Donger: {
		url: "http://na.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/hh-banner.jpg?itok=iGL42f-W",
		color: "#dda949"
	}
}

$("#themes span").click(function(){
	theme = themes[$(this).attr("data-theme")];
	$("#background").css("background-image","url("+ theme.url +")");
	$("#navbar").css("background-color", theme.color);

});