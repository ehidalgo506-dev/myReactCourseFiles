import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmitHandler(term) {
    console.log(term);
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmitHandler} />
      </div>
    );
  }
}

export default App;
