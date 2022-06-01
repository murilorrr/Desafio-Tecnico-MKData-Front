import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Group,
  Customer
} from './pages'

import GlobalProvider from './contexts/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/customers" component={ Customer } />
        <Route exact path="/groups" component={ Group } />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
