import {  Routes ,Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact"
import About from "../pages/About"
import JobDetails from "../pages/JobDetails";



function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
    )
}
export default AppRoutes;