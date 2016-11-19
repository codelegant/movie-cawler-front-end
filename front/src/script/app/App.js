import React from 'react';
import CitySelector from './CitySelector';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySelectorDisplay: false,
      city: {
        name: '深圳',
        id: '',
      },
    }
  }

  updateCitySelectorDisplay = citySelectorDisplay => this.setState({ citySelectorDisplay });

  componentDidMount() {
    this.setState({ pageLoading: false });
  }

  render() {
    return (
      <div>
        <CitySelector/>
      </div>
    );
  }
}
