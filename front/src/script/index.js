import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default"/>
);

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('container')
);