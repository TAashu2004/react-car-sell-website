import {Route,Routes}from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Buy from "./Buy";
import Carform from "./Carform";

const App = () =>{
  return(
<>
<Navbar/>
<Routes>
  <Route path="/" element={<Home></Home>}/>
  <Route path="/Contact" element={<Contact></Contact>}/>
  <Route path="/About" element={<About></About>}/>
  <Route path="/Buy" element={<Buy></Buy>}/>
  <Route path="/Carform" element={<Carform></Carform>}/>
</Routes>
</>

  );
};

export default App;