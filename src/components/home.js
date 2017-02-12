var React = require("react");
var TaskListContainer = require("../containers/TaskListContainer");

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <TaskListContainer/>
          </div>
        </div>
        <nav className="navbar navbar-inverse navbar-fixed-bottom visible-xs">
          <div className="container-fluid">
            <div className="nav navbar-nav navbar-btn" style={{textAlign: "center"}}>
              <div className="col-xs-12">
                <a className="btn btn-info btn-block" href="/add">
                  <span className="glyphicon glyphicon-plus"></span> Add a new Task
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Home;
