import React from 'react';

const Loader = (props) => {
  const { message } = props;
  return (
    <div class='ui active dimmer'>
      <div class='ui loader text big'>{message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: 'Loading...',
};
export default Loader;
