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
import Speach from './components/Speach/Speach';
import Who from './components/Who/Who';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
       <Nav></Nav>
       <Landing></Landing>
       <Competitions></Competitions>
       <Events></Events>
       {/* <Who></Who>
        */}
       
       <Achivment></Achivment>
       {/* <Speach></Speach> */}
       <Partner></Partner>
       <Team></Team>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}

export default App;
