import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
// import { Router, Switch } from 'react-router';

import './App.css';

import HomePage from './components/HomePage';





function App() {
  return (
  <Router>
    <div className="App">
      
     
     <Switch>
   
      
      
      <Route  exact path='/' component = { HomePage }/>
      
      
      
    
      </Switch>
      
      
  

    
    </div>
    </Router>
   
  );
}

export default App;
