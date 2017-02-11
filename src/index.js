var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
  render: function(){
    return(
      <div>
        Hello, world!
      </div>
    );
  }
});

ReactDom.render(<Hello/>, document.getElementById('container'));
