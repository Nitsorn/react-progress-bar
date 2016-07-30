var React = require('react');
var PropTypes = React.PropTypes;

var ProgressBar = React.createClass({
  getInitialState: function() {
    return {
      loading: false,
      completed: false,
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.loading && !nextProps.completed) {
      this.setState({
        loading: true,
        completed: false
      })
    }
    if (nextProps.loading && nextProps.completed) {
      this.setState({
        loading: true,
        completed: true
      })
    }
  },
  render: function() {
    if (this.state.loading && !this.state.completed) {
      var loadingSpeed = 'slow ' + this.props.inModal;
    } else if (this.state.completed){
      var loadingSpeed = 'fast ' + this.props.inModal;
    } else {
      var loadingSpeed = 'none ' + this.props.inModal;
    }
    return (
      <div id='progressBar-container'>
        <div id='progressBar-bar' className={loadingSpeed}></div>
      </div>
    );
  },
  componentDidUpdate: function(prevProps, prevState) {
    // once completed, reset to no-loading state
    if (this.state.completed) {
      setTimeout(function(){
        this.setState({
          loading: false,
          completed: false
        }, function(){
          this.props.resetLoading()
        })
      }.bind(this),1200)
    }
  },
});

module.exports = ProgressBar;
