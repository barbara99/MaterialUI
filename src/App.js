import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import AddNew from './components/AddNew' ;
import View from './components/View'
import Edit from './components/Edit'
import CoursesList from './components/SchoolList';
import {Switch, Route} from 'react-router-dom'




class App extends Component {
  render() {
    return (
     <div>
      <NavBar />
      
      <Switch>
      <Route path="/edit" component={Edit}/>
      <Route path="/view" component={View}/>
      <Route path="/schools" component={CoursesList}/>
      <Route path="/add_new" component={AddNew} />
     
</Switch>
      
     

        
      </div>
    );
  }
}

export default App;
