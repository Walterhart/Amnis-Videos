import Home from './Pages/Home';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import VideoDetail from './VideoComponents/VideoDetails';
import Error404 from './Pages/Error404';
import AddVideo from './Pages/AddVido';

function App() {
  return (
    <BrowserRouter>
    <header>
       <Navbar/>
    </header>
    <Routes> 
      <Route path = "/" element={ <Home/> }/>             
      <Route path = "/Sign-up" element={<SignUp/>}/>   
      <Route path = "/Login" element= {<Login/>}/>  
      <Route path = "/Profile" element={<Profile/>} />   
      <Route path = "/videos/:id" element={<VideoDetail/>}/> 
      <Route path = "/Add-video" element={<AddVideo/>}/>       
      <Route path = '/*' element={<Error404/>} />         
    </Routes>
    </BrowserRouter>

  );
}

export default App;
