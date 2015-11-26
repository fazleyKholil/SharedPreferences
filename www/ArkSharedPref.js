var exec = require('cordova/exec');

function ArkSharedPref() {
    console.log("ArkSharedPrefPlugin.js: is created");
}

var EXEC_NATIVE = function (action, args) {
    exec(function (result) {
            alert("ok" + JSON.stringify(result));
        },
        function (result) {
            alert("Error");
        }, "ArkSharedPref", action, args);
};

ArkSharedPref.prototype.save = function (action, key, str) {
    var args = [key, str];
    EXEC_NATIVE(action, args);
}

ArkSharedPref.prototype.get = function (action, key) {
    EXEC_NATIVE(action, [key, " "]);
}

var ArkSharedPref = new ArkSharedPref();
module.exports = ArkSharedPref;
