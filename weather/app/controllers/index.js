function doClick(e) {
    alert($.label.text);
}

$.index.open();

var xhr = Titanium.Network.createHTTPClient();
xhr.open("GET", "http://weather.livedoor.com/forecast/webservice/json/v1?city=030010");
// xhr.onload = callback_success;
// xhr.onerror = callback_failure;

xhr.onload = function(){
	var json = JSON.parse(this.responseText);
	Ti.API.info(json);
	//alert(json['forecasts'][1]['data']+"|"+json['forecasts'][1]['temperature']['max']['celsius']);
	var max = json['forecasts'][1]['temperature']['max']['celsius'];
	$.max.text = "明日の盛岡の最高気温は，"+max+"です";
};
xhr.onerror = function(){
	alert('miss');
};

xhr.send();