var React = require('react');
var PropTypes = React.PropTypes;
var ProgressBar = require ('react-progress-bar');

var App = React.createClass({

  getInitialState: function() {
    // Add startLoading and completeLoading to the component's state
    return {
      startLoading: false, // set to true if loading starts on mount
      completeLoading: false
    };
  },

  render: function() {
    return (
      <div>
        <ProgressBar
          completed={this.state.completeLoading}
          loading={this.state.startLoading}
          resetLoading={this.resetLoading} />
        {
          // The rest of the component.
        }
      </div>
    );
  },

  // Add these 3 methods
  startLoading: function(){
	   this.setState({startLoading: true});
	},

	endLoading: function(){
    this.setState({completeLoading: true});
  },

	resetLoading: function() {
    this.setState({
      startLoading: false,
      completeLoading: false
    });
  }

});

module.exports = App;
