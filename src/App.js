import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Containers/Main/Main'
import Users from './Components/Users'
import Contacts from './Components/Contacts'
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
        <Route path ="/Users" component={Users}/>
        <Route path ="/Contacts" component={Contacts}/>
        </Switch>
        </div>
        
        <Footer></Footer>
        </div>
        </Router>
  );
}

export default App;
