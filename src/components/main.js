var React = require("react");
var Main = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="nav navbar-nav navbar-btn pull-right" style={{paddingRight: "10px"}}>
              <a className="btn btn-warning btn-inverse" href="/help">
                <span className="glyphicon glyphicon-question-sign"></span> Help
              </a>
            </div>
            <div className="nav navbar-nav navbar-btn pull-right hidden-xs" style={{paddingRight: "10px"}}>
              <a className="btn btn-info" href="/add">
                <span className="glyphicon glyphicon-plus"></span> Add a new Task
              </a>
            </div>
            <div className="navbar-header">
              <a className="navbar-brand" href="/">To do List</a>
            </div>
          </div>
        </nav>
        <div style={{paddingTop: "70px", paddingBottom: "70px"}}>
        {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;