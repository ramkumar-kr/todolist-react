var React = require("react");
var PropTypes = React.PropTypes;

var Task = function(props){
  return(
    <div className="panel panel-default col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0}}>
      <table className="table table-hover">
        <tbody>
          <tr>
            <td className="col-xs-1" style={{verticalAlign: "inherit", textAlign: "center"}}>
              <span className={props.buttonIcon}
                    onClick={props.onStatusChange.bind(null, props.task)}
                    style={{fontSize: "18px", lineHeight: 1.6}}>
                
              </span>
            </td>
            <td className="col-xs-8" style={{verticalAlign: "inherit"}}>
              <p style={{wordWrap: "break-word", overflow: "auto"}}>{props.task.title}</p>
            </td>
            <td className="col-xs-3" style={{verticalAlign: "inherit", textAlign: "right"}}>
              <span style={{display: "inline-flex"}}><button className="btn btn-primary btn-block" onClick={props.onClick.bind(null, props.task)} style={{marginRight: "3px", marginBottom: "1px"}}>
                <span className="glyphicon glyphicon-pencil"></span> Edit
             </button></span>
             <span style={{display: "inline-flex"}}><button className="btn btn-danger btn-block" onClick={props.onDelete.bind(null, props.task)} style={{marginRight: "3px", marginBottom: "1px"}}>
                <span className="glyphicon glyphicon-trash"></span> Delete
             </button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }),
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string.isRequired
};

module.exports = Task;