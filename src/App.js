import productApi from 'api/productApi';
import NotFound from 'components/NotFound';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';
import TodoFeature from 'features/Todo';
import { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';
import styled from 'styled-components';

// CSS in JS
const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || 'green'};
`;

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
  }, []);

  // const color = 'red'; // inline css hay dùng cho kiểu dữ liệu mà mình k biết trước
  // <div className="app" style={{color:color}}>

  return (
    <div className="app">
      <Title color="goldenrod">Header</Title>
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

        <Route path="/" component={CounterFeature} exact />
        {/* <Route path="/" component={TodoFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} exact={false} />
        <Route path="/albums" component={AlbumFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
