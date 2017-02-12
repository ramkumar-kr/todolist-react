var React = require("react");
var TaskList = require("../components/tasklist");
var TaskStore = require("../utils/localStorage");

var TaskListContainer = React.createClass({
  getInitialState: function(){
    return ({
      tasks: []
    });
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function(){
    return(
      <TaskList tasks={this.state.tasks} handleEdit={this.handleEdit} handleTaskStatus={this.handleTaskStatus} handleDelete={this.handleDelete}/>
    );
  },
  componentDidMount: function(){
    this.setState({tasks: TaskStore.list()});
  },
  handleEdit: function(task){
    this.context.router.push({
      pathname: "/edit",
      state: task
    });
  },
  handleTaskStatus: function(task, e){
    task.checked = !task.checked;
    var buttonIcon = task.checked ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
    e.target.className=buttonIcon;
    // e.target.lastChild.className = buttonIcon;
    TaskStore.set(task);
  },
  handleDelete: function(task){
    TaskStore.delete(task.id);
    this.setState({tasks: TaskStore.list()});
  }
});

module.exports = TaskListContainer;