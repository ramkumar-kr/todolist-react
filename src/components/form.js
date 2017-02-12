var React = require("react");
var PropTypes = React.PropTypes;

var Form = function(props){
  return(
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <form onSubmit={props.onSubmit}>
            <input type="hidden" value={props.task_id} id="id"/>
            <div className="form-group">
              <label htmlFor="title">I want to do</label>
              <textarea className="form-control" id="title" rows="3" required defaultValue={props.task_title}/>
            </div>
            <div className="col-xs-6">
              <button type="submit" className="btn btn-success btn-block btn-lg">
                <span className="glyphicon glyphicon-ok"></span> Save
              </button>
            </div>
            <div className="col-xs-6">
              <button type="reset" className="btn btn-danger btn-block btn-lg" onClick={props.onCancel}>
                <span className="glyphicon glyphicon-remove"></span> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

Form.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  task_id: PropTypes.string,
  task_title: PropTypes.string
};

module.exports = Form;
