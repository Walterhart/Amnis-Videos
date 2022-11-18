import Home from './Pages/Home';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import VideoDetail from './VideoComponents/VideoDetails';
import Error404 from './Pages/Error404';
import AddVideo from './Pages/AddVido';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import HomePage from './Pages/HomePage';
import Netflix from './Pages/Netflix';
import Paramount from './Pages/Paramount';
import Hulu from './Pages/Hulu';
import Amazon from './Pages/Amazon';
import Disney from './Pages/Disney';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <Routes> 
          <Route path = "/" element={ <Home/> }/>    
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
          <Route path = "/Add-video" element={<AddVideo/>}/>       
          <Route path = '/*' element={<Error404/>} />         
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
