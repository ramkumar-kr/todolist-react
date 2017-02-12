var React = require("react");
var Form = require("../components/form");
var TaskStore = require("../utils/localStorage");

var EditContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return({task: this.props.location.state});
  },
  render: function(){
    return(
      <Form onSubmit={this.handleUpdate}
            onCancel={this.handleCancel}
            task_id={this.state.task.id}
            task_title={this.state.task.title}
            task_checked={this.state.task.checked}/>
    );
  },
  handleUpdate: function(e){
    var task_id = (e.target.id.value) || (Date.now() + Math.random() +e.target.title.value);
    var task = {
      id: task_id,
      title: e.target.title.value,
      checked: this.state.task.checked
    };
    TaskStore.set(task);
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

module.exports = EditContainer;