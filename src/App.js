import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React from 'react';
import './App.scss';
import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      {/* <TodoFeature /> */}
      <AlbumFeature />
    </div>
  );
}

export default App;
