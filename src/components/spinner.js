import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
}
export default Spinner;
