import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Course from '../Course.js';
import CoursesList from './components/CourseList.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/course" component={CoursesList}/>
      <Route path="/about" component={Course}/>
      
    </Switch>
  </main>
)

export default Main;