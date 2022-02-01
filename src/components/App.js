import React, { useState } from 'react';
import SearchBar from './SearchBar';
import config from '../config';
import unsplash from '../api/unsplash';
import Loader from './Loader';

class App extends React.Component {
  state = { loading: '', images: [] };

  onSearchSubmitHandler = async (term) => {
    this.setState({ loading: true });
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ loading: false });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmitHandler} />
        {this.state.loading && <Loader />}
        Found: {this.state.images.length}
      </div>
    );
  }
}
// const App = () => {
//   const [isApiLoading, setIsApiLoading] = useState('');

//   const onSearchSubmitHandler = (term) => {
//     setIsApiLoading(true);
//     axios
//       .get(config.url, {
//         params: {
//           query: term,
//         },
//         headers: {
//           Authorization: `Client-ID ${config.accessKey}`,
//         },
//       })
//       .then((response) => {
//         setIsApiLoading(false);
//         console.log(response.data);
//       });
//   };

//   return (
//     <div className='ui container' style={{ marginTop: '10px' }}>
//       <SearchBar onSearchSubmit={onSearchSubmitHandler} />
//       {isApiLoading && <Loader />}
//     </div>
//   );
// };

export default App;
