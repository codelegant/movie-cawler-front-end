import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CitySelector from './CitySelector';
injectTapEventPlugin();


const Index = () => (
  <MuiThemeProvider>
    <CitySelector />
  </MuiThemeProvider>
);

export default Index;