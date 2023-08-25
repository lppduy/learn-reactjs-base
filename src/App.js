import productApi from 'api/productApi';
import NotFound from 'components/NotFound';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };

      const productList = await productApi.getAll(params);
      console.log('>>> productList', productList);
    };
    fetchProducts();
  });

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
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} exact={false} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
