// import ColorBox from 'components/ColorBox';
// import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
// import logo from './logo.svg';
import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

function App() {
  return (
    <div className="app">
      Home Page
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        {/* default: activeClassName="active" */}
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
