import Home from './Pages/Home';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import VideoDetail from './VideoComponents/VideoDetails';
import Error404 from './Pages/Error404';
import AddVideo from './Pages/AddVido';
import HomePage from './Pages/HomePage';
import Netflix from './Pages/Netflix';
import Paramount from './Pages/Paramount';
import Hulu from './Pages/Hulu';
import Amazon from './Pages/Amazon';
import Disney from './Pages/Disney';

function App() {
  return (
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <Routes> 
          <Route path = "/" element={ <HomePage/> }/>    
          <Route path = "/HomePage" element={ <HomePage />}/>  
          <Route path = "/Netflix" element={< Netflix />}/>
          <Route path = "/Paramount" element={<Paramount/>}/>
          <Route path = "/Disney" element={< Disney />}/>
          <Route path = "/Amazon" element={<Amazon/>}/>
          <Route path = "/Hulu" element={< Hulu />}/>
          <Route path = "/Sign-up" element={<SignUp/>}/>   
          <Route path = "/Login" element= {<Login/>}/>  
          <Route path = "/Profile" element={<Profile/>} />   
          <Route path = "/videos/:id" element={<VideoDetail/>}/> 
          <Route path = "/Disney/:id" element={<VideoDetail platform='disney'/>}/>
          <Route path = "/Netflix/:id" element={<VideoDetail  platform='netflix'/>}/> 
          <Route path = "/Paramount/:id" element={<VideoDetail  platform='paramount'/>}/> 
          <Route path = "/Amazon/:id" element={<VideoDetail  platform='amazon'/>}/> 
          <Route path = "/Hulu/:id" element={<VideoDetail platform='hulu'/>}/>  
          <Route path = "/Add-video" element={<AddVideo/>}/>       
          <Route path = '/*' element={<Error404/>} />         
        </Routes>
      </BrowserRouter>
  );
}

export default App;
