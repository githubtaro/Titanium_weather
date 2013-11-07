function Controller() {
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.max = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "max"
    });
    $.__views.index.add($.__views.max);
    doClick ? $.__views.max.addEventListener("click", doClick) : __defers["$.__views.max!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var xhr = Titanium.Network.createHTTPClient();
    xhr.open("GET", "http://weather.livedoor.com/forecast/webservice/json/v1?city=030010");
    xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        Ti.API.info(json);
        var max = json["forecasts"][1]["temperature"]["max"]["celsius"];
        $.max.text = "明日の盛岡の最高気温は，" + max + "です";
    };
    xhr.onerror = function() {
        alert("miss");
    };
    xhr.send();
    __defers["$.__views.max!click!doClick"] && $.__views.max.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;