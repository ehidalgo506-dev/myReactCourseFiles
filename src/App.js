import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
      );
    }
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.late} />;
    }

    return <h1>Loading...</h1>;
  }
}

export default App;
