import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  static propTypes = {
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <AppBar

      />
    );
  }
}