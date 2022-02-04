import React from 'react';
import unsplash from '../api/unplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import Spinner from './spinner';

class App extends React.Component {
  state = { loading: '', images: [] };
  onSearchSubmitHandler = async (term) => {
    this.setState({ loading: true });
    this.setState({ images: [] });
    const response = await unsplash.get('search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    this.setState({ loading: false });
    console.log(response.data.results);
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmitHandler} />
        {this.state.loading && <Spinner />}
        <p>Found {this.state.images.length} images!</p>
        {this.state.images.length !== 0 && (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
