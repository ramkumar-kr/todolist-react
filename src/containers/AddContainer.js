var React = require("react");
var Form = require("../components/form");
var TaskStore = require("../utils/localStorage");

var AddContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function(){
    return(
      <Form onSubmit={this.handleCreate} onCancel={this.handleCancel} />
    );
  },
  handleCreate: function(e){
    var task = {
      id: Date.now() + Math.random() +e.target.title.value,
      title: e.target.title.value,
      checked: false
    };
    TaskStore.push(task);
    this.context.router.push({
      pathname: "/"
    });
  },
  handleCancel: function(){
    this.context.router.push({
      pathname: "/"
    });
  }
});

module.exports = AddContainer;