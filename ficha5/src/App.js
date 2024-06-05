import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilmeTable from './FilmeTable';
import FilmeCard from './FilmeCard';
import Contacts from './Contacts';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />

        <Route path="/filme_table" component={FilmeTable} />

        <Route path="/filme_card" component={FilmeCard} />

        <Route path="/contacts" component={Contacts} />

        <Route path="/login" component={Login} />

        <Route path="/signup" component={Signup} />

        <Route component={() => <h1>404 - Página não encontrada</h1>} />
      </Switch>
    </Router>
  );
};

export default App;