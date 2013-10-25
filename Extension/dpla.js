
function showDPLA(){
//$("body").css({"background-color":"green"});
subjects = "";
$(".bibInfoLabel").each(function(key,val){
console.log(val);
	if ($(val).text()=="Subject"){
		subval = $(val).parent().text().substring(8);
		subjects = subval.split(" ")[0];
		console.log(subval);
	}
	
});

$("body").append("<div id='dplaColumn'></div>");
    getPics(subjects);
	

}
function getPics(){

url = "http://api.dp.la/v2/items?q="+subjects+"&api_key=75955e531b6e9735b56711e5cacaf02f"

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
       showPics(xhr.responseText);
  }
}
xhr.send();
}



function showPics(data){
j = JSON.parse(data);
for (i=0;i<j["docs"].length;i++){

$("#dplaColumn").append("<a href='"+j["docs"][i]["isShownAt"]+"'><img src='"+j["docs"][i]["object"]+"'/><div>"+j["docs"][i]["sourceResource"]["title"]+"</div></a>");

}

	
}