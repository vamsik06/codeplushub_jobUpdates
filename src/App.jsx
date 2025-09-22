import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./pages/Footer";

function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    )
}
export default App;