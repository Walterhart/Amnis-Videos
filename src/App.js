import Home from './Pages/Home';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Error404 from './Error404';
import VideoDetail from './VideoDetails';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <header>
       <Navbar/>
    </header>
    <Routes> 
      <Route exact path = "/" element={ <Home/> }/>             
      <Route path = "/:id" element={<VideoDetail/>}/>    
      <Route path = "/Sign-up" element={<SignUp/>}/>   
      <Route path = "/Login" element= {<Login/>}/>  
      <Route path = "/Profile" element={<Profile/>} />               
    </Routes>
    </BrowserRouter>

  );
}

export default App;
