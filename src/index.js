// var React = require("react");
var ReactDom = require("react-dom");
var routes = require("./config/routes");
require("offline-plugin/runtime").install();
ReactDom.render(routes, document.getElementById("container"));
