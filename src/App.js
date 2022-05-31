import { Switch, Route } from 'react-router-dom';
import {
  // loginPage,
  Group,
  Customer
} from './pages'

function App() {
  return (
    <Switch>
      {/* <Route exact path="/" component={ loginPage } /> */}
      <Route exact path="/customers" component={ Customer } />
      <Route exact path="/groups" component={ Group } />
    </Switch>
  );
}

export default App;
