// import ColorBox from 'components/ColorBox';
// import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
// import logo from './logo.svg';
import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

function App() {
  return (
    <div className="app">
      Home Page
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
