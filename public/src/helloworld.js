// Most basic example within ReactJS
/* ReactDOM.render(
  <h1>Hello, world from ReactJS !!</h1>,
  document.getElementById('example')
); */

// This would be a very simple component. Next, code somethign with arguments
var TestComponent = React.createClass({
  render: function() {
    return (
      <div id="testComponentRenderTag">Esto es un componente de testeo de ReactJS</div>
    );
  }  
});

// Nice !! jQuery selectors can be used within React JS !!
ReactDOM.render(
  <TestComponent/>, $("#example")[0]
);