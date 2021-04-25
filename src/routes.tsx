import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import InputRefsExample from './pages/InputRefsExample';
import ModalImperativeExample from './pages/ModalImperativeExample';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/input" component={InputRefsExample} />

        <Route path="/modal" component={ModalImperativeExample} />
      </Switch>
    </BrowserRouter>
  );
}
