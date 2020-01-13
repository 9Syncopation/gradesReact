import React from 'react';
import Header from './components/Header'
import Footer from './components/footer'
import Main from './Containers/Main/Main'
import Users from './components/users'
import Contacts from './components/contacts'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Header> </Header>
        <div className = 'container'>
        <Switch>
        <Route exact path ="/" component={Main} />
        <Route path ="/users" component={Users}/>
        <Route path ="/contacts" component={Contacts}/>
        </Switch>
        </div>
        
        <Footer></Footer>
        </div>
        </Router>
  );
}

export default App;
