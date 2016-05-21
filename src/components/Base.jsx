var React = require('react');

var Base = React.createClass({
  render: function(){
    return (
      <div>
        <h1 href="/page1">Header</h1>
          <a href="#/page1">Page1</a>
          &nbsp;
          <a href="#/page2">Page2</a>
          {this.props.children}
        <h1>Footer</h1>
      </div>
    );
  }
});

module.exports = Base;
