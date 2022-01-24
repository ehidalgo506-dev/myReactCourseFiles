import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          this.setState({ lat: position.coords.latitude });
        },
        (err) => {
          this.setState({ errorMessage: err.message });
        }
      );
    }
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <h1>Lat: {this.state.lat}</h1>;
    }

    return <h1>Loading...</h1>;
  }
}

export default App;
