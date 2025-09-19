import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";


function App(){
    return(
        <BrowserRouter>
        <Navbar />
      
        
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}
export default App;