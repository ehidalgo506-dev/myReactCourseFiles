import React from 'react';
class Loader extends React.Component {
  render() {
    return (
      <div className='ui segment' style={{ minHeight: '10rem' }}>
        <div className='ui active dimmer'>
          <div className='ui indeterminate text loader'>Preparing Files</div>
        </div>
        <p></p>
      </div>
    );
  }
}
export default Loader;
