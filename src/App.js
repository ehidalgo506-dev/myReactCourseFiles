import React from 'react';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    console.log(`Loading`);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
      );
    }
  }

  componentDidUpdate() {
    console.log(`Done`);
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message='We need Geolocation services...' />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
