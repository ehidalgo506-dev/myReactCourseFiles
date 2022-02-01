import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onChangeInputHandler(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const inputValue = this.state.term;
    this.props.onSearchSubmit(inputValue);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.onChangeInputHandler(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
