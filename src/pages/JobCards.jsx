import "./jobcards.css"
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
const Jobcards =(props)=>{ 
    
    // const timeAgo = (date) =>{
    //     const now = new Date();
    //     const jobDate = new Date(date);
    //     const diffInSeconds = Math.floor((now - jobDate) / 1000);

    //     const seconds = Math.floor(diff / 1000);
    //     const minutes = Math.floor(seconds / 60);
    //     const hours = Math.floor(minutes / 60);
    //     const days = Math.floor(hours / 24);

    //     if (days > 0) { return `${days} day${days > 1 ? 's' : ''} ago`;} 
    //     if (hours > 0) { return `${hours} hour${hours > 1 ? 's' : ''} ago`;}
    //     if (minutes > 0) { return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;}    
    //     return "Just now";
    // }; 
    return(  
                <div className="card">
                <h2>{props.role}</h2>
                {/* <div className="posted-time">{timeAgo(props.postedAt)}</div> */}
                <div className="company-details">
                    <img src={props.companyImage}  alt="comapany-logo"/>
                    <h4>{props.companyName}</h4>
                </div>

                <div className="extra-details">
                 
                    <h6> <SlLocationPin />{props.location}</h6>
                    <h6>{props.experience}</h6>
                    <h6>{props.typeOfJob}</h6>
                </div>
                <button>Apply Now</button>
                </div>
                

    );
}

export default Jobcards;