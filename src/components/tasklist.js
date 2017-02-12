var React = require("react");
var PropTypes = React.PropTypes;
var Task = require("../components/task");

function TaskList(props){
  if(props.tasks.length == 0){
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="page-header">
            <h1>No todos found</h1>
          </div>
          <a className="btn btn-info btn-lg btn-block" href="/add">
            <span className="glyphicon glyphicon-plus"></span> Add a new Task
          </a>
        </div>  
      </div>
    );
  }
  return(
    <div className="row">
      <div className="col-lg-12">
        <ul className="list-group">
        {props.tasks.map(function(task){
          var buttonIcon = task.checked ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked"
          return (<Task task={task} 
                        onClick={props.handleEdit}
                        onDelete={props.handleDelete}
                        onStatusChange={props.handleTaskStatus}
                        buttonIcon={buttonIcon}
                        key={task.id}/>);
        })}
        </ul>
        </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleTaskStatus: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

module.exports = TaskList;

