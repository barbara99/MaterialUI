import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import CoursesList from './components/CourseList';



class App extends Component {
  render() {
    return (
     <div>
      <NavBar />
      <CoursesList />
      <CoursesList />
        
      </div>
    );
  }
}

export default App;
