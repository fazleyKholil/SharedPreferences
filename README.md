html_sanitize
=========

A small library providing utility methods to `save` and `get` a string to the native Shared preference of android

## Installation

  npm install cordova-plugin-SharedPref --save

## Usage

```javascript

/**
* to save a value to the shared preference
*/
SharedPref.arkPref("save", "name", "yovan jugoo", function (prefObj) {
    alert(JSON.stringify(prefObj));
 });
 
/**
* to get a value from the shared preference
*/
SharedPref.arkPref("get", "name", " ", function (prefObj) {
    $scope.name = prefObj;
    alert($scope.name.name);
});

```

## Release History

* 0.0.0 Initial release
