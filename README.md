# react-progress-bar
Loading bar for your React.js app. Similar to one used in Youtube.

<br />
![alt tag](http://oatlikeoatmeal.com/files/react-loading-bar.png)

# Setup
### 1. npm install
`npm install simple-react-progress-bar`


### 2. In your component.js.jsx
```javascript
require ('react-progress-bar');

var component = React.createClass({
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
        <ProgressBar completed={this.state.completeLoading} loading={this.state.startLoading} resetLoading={this.resetLoading} />
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

```
### 3. In your CSS
Add the content of `stylesheet.css` to your CSS.

# Usage
Call `this.startLoading()` to start the loading animation.
Call `this.endLoading()` to stop the loading animation.

For example, in an ajax call:
```javascript
gettingNewStuff: function(){

  this.startLoading();
  
  $.ajax({
    url: '/get_new_stuff',
    type: 'get',
    success: function(){
    
      // success feedback
      this.endLoading();
      
    },
    error: function(){
    
      // error feedback
      this.endLoading();
      
    }
    
  })
}
```


