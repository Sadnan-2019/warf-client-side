import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Competitions from './components/Competitions/Competitions';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Partner from './components/Partner/Partner';
import Achivment from './components/Achivment/Achivment';
 
 
import Team from './components/Team/Team';
import WeDo from './components/WeDo/WeDo';
import Speach from './components/Speach/Speach'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
// import Robotics from './components/Robotics/Research';
import Research from './components/Robotics/Research';
import News from './components/News/News';
 

function App() {
  return (
    <div className="">
       <Nav></Nav>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/research" element={<Research></Research>}></Route>
       <Route path="/news" element={<News></News>}></Route>
       </Routes>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}

export default App;
