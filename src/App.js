import { Switch, Route } from 'react-router-dom';
import {
  // loginPage,
  // groupPage,
  Customer
} from './pages'

function App() {
  return (
    <Switch>
      {/* <Route exact path="/" component={ loginPage } /> */}
      <Route exact path="/customers" component={ Customer } />
      {/* <Route exact path="/groups" component={ groupPage } /> */}
    </Switch>
  );
}

export default App;
