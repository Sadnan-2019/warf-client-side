import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Competitions from './components/Competitions/Competitions';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Partner from './components/Partner/Partner';

function App() {
  return (
    <div className="App">
       <Nav></Nav>
       <Landing></Landing>
       <Competitions></Competitions>
       <Events></Events>
       <Partner></Partner>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}

export default App;
