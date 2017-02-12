var React = require("react");
var ReactRouter = require("react-router");
var Main = require("../components/main");
var Help = require("../components/help");
var Home = require("../components/home");
var AddContainer = require("../containers/AddContainer");
var EditContainer = require("../containers/EditContainer");
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/> 
        <Route path="help" component={Help}/>
        <Route path="add" component={AddContainer}/>
        <Route path="edit" component={EditContainer}/>
      </Route>
  </Router>
);

module.exports = routes;

