'use strict';

var React = require('react');

var ProgressBar = React.createClass({
  displayName: 'ProgressBar',

  getInitialState: function getInitialState() {
    return {
      loading: false,
      completed: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.loading && !nextProps.completed) {
      this.setState({
        loading: true,
        completed: false
      });
    }
    if (nextProps.completed) {
      this.setState({
        loading: true,
        completed: true
      });
    }
  },
  render: function render() {
    if (this.state.loading && !this.state.completed) {
      var loadingSpeed = 'slow ' + this.props.inModal;
    } else if (this.state.completed) {
      var loadingSpeed = 'fast ' + this.props.inModal;
    } else {
      var loadingSpeed = 'none ' + this.props.inModal;
    }

    return React.createElement(
      'div',
      { id: 'progressBar-container' },
      React.createElement('div', { id: 'progressBar-bar', className: loadingSpeed })
    );
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // once completed, reset to no-loading state
    if (this.state.completed) {
      setTimeout(function () {
        this.setState({
          loading: false,
          completed: false
        }, function () {
          this.props.resetLoading();
        });
      }.bind(this), 1200);
    }
  }
});

module.exports = ProgressBar;
