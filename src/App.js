import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Shared/Navbar';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import FollowMe from './Pages/FollowMe';
import { Routes, Route } from "react-router-dom";
import ShowProjects from './ShowProject/ShowProjects';
import AboutMe from './Pages/AboutMe';
import ProjectDetail from './ShowProject/ProjectDetail';
import Blogs from './Pages/Blogs';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='contactme' element={<ContactMe></ContactMe>}></Route>
        <Route path='showprojects' element={<ShowProjects></ShowProjects>}></Route>
        <Route path='project/:projectId' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      
      
      
      <FollowMe></FollowMe>
      
    </div>
  );
}

export default App;
