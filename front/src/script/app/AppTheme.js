import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

injectTapEventPlugin();

const AppTheme = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);
export default AppTheme;