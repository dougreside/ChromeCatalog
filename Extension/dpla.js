key = ""; // insert key here
function showDPLA(){
//$("body").css({"background-color":"green"});
$(".bibInfoLabel").each(function(key,value){
console.log(key+" "+value);
});

$("body").append("<div id='dplaColumn'></div>");
    getPics();
	

}
function getPics(){

url = "http://api.dp.la/v2/items?sourceResource.subject=yodeling&api_key="+key

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
$("#dplaColumn").append("<img src='"+j["docs"][i]["object"]+"'/><div>"+j["docs"][i]["sourceResource"]["title"]+"</div>");

}

	
}