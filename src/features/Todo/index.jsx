import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
