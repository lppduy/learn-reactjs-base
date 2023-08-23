// import ColorBox from 'components/ColorBox';
// import Counter from 'components/Counter';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
// import logo from './logo.svg';
import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

function App() {
  return (
    <div className="app">
      Home Page
      {/* default: activeClassName="active" */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
