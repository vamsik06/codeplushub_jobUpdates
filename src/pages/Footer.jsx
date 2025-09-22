import { LuInstagram } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom"; 
import "./footer.css"
const Footer = () => {
    return(
        <>
        <footer className="footer">
          <div className="div1">
            <h2>code(+)Hub_jobUpdates</h2>
            <p>Your gateway to the latest off-campus job opportunities for freshers and experienced professionals.</p>
          </div>
            <div className="div2">
                <h3>Quick Links</h3>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
            </div>
            <div className="div3">
            <h3>Connect With Us</h3>
            <div className="social-icons">
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><LuInstagram /></a>
                {/* Add other social media icons similarly */}
                <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /></a>
                <a href="mailto:codeplsuhub@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail /></a>
            </div>
            </div>
            
        </footer>
       
        <div className="bottom-footer">
            <p>&copy; 2024 code(+)Hub. All rights reserved.</p>
        </div>
         </>
    )
}

export default Footer;