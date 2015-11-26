html_sanitize
=========

A small library providing utility methods to `save` and `get` a string to the native Shared preference of android

## Installation

  npm install cordova-plugin-sharedpref --save

## Usage
In the index.html include :
```html
  <script type="text/javascript" src="SharedPref.js"></script>
```
  
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

* 0.0.1 Initial release
