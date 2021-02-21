import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './pages/Home';
import Account from './pages/Account';
import Cards from './components/Cards';


function App() {
  return (
    <div className='app'>
      
    <Router>
      <Navbar />
      <Switch>
        <Route path='/cards' exact component={Cards}/>
        <Route path='/account' exact component={Account}/>
      </Switch>
    </Router>
      
      
    </div>
  );
}

export default App;
