import Home from './Pages/Home';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Error404 from './Error404';
import VideoDetail from './VideoDetails';

function App() {
  return (
    <BrowserRouter>
    <header>
       <Navbar/>
    </header>
    <Routes> 
      <Route exact path = "/" element={ <Home/> }/>             
      <Route path = "/:id" element={<VideoDetail/>}/>             
    </Routes>
    </BrowserRouter>

  );
}

export default App;
