function App() {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img src='' alt='avatar' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6pm</span>
          </div>
          <div className='text'>Nice Blog Post</div>
        </div>
      </div>
    </div>
  );
}

export default App;
