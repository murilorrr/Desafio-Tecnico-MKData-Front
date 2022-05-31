import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Group,
  Customer
} from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/customers" component={ Customer } />
      <Route exact path="/groups" component={ Group } />
    </Switch>
  );
}

export default App;
