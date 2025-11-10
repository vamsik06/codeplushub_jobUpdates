import "./jobcards.css"
import { SlLocationPin } from "react-icons/sl";


const Jobcards =(props)=>{ 
  
    const handleApplyClick = (id) => {
        window.open(`/job/${id}`, "_blank");

    }
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
                <button onClick={()=>handleApplyClick(props.id)}>Apply Now</button>
                </div>
    );   
}
export default Jobcards;