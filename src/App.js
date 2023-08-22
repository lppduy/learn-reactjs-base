// import ColorBox from 'components/ColorBox';
// import Counter from 'components/Counter';
// import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
// import logo from './logo.svg';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
    </div>
  );
}

export default App;
