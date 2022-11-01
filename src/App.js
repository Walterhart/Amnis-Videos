import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Error404 from './Error404';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">    
      <header>
        <Navbar/>
      </header>
      </div>
          <div className="content">
            <Switch>
              <Route exact path = "/">
               <Home/>         
              </Route>
              <Route path = "/add-video">       
              </Route>
              <Route path = "/videos/:id">    
              </Route>  
              <Route path = "/Login">         
              </Route> 
              <Route path = "/SignInOutTab">               
              </Route> 
              <Route path = "/Sign-up">             
              </Route>  
              <Route path = "/TestPage">         
              </Route> 
              <Route path = "*">
                <Error404/>
              </Route>          
            </Switch>
          </div> 
    </div>
    </Router>
  );
}

export default App;
