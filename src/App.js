import React from "react";
import './App.css';
import Main from './components/Main';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import EmployerSignUp from './components/EmployerSignUp'; 


function App(){
  return (

    <div className = "App">

        <div className = "Content">

          <Router>
                <Route path='/' exact component={Main}/>

                <Route path='/empsignup' exact component={EmployerSignUp}/>

          </Router>

        </div>

      </div>

  );
}

export default App;