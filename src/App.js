import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Shared/Navbar';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import FollowMe from './Pages/FollowMe';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <FollowMe></FollowMe>
      
    </div>
  );
}

export default App;
