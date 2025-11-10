import { useParams } from 'react-router-dom';
import jobs from "../dataObject/data";
import './JobDetails.css';
import Jobcards from './JobCards';  // ✅ Reuse your Jobcards component
import { SlLocationPin } from "react-icons/sl";  // ✅ You need this if you use location icon

function JobDetails() {
  const { id } = useParams();
  

  // Find selected job
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }



  // ✅ Filter out current job to show other jobs
  const moreJobs = jobs.filter((j) => j.id !== parseInt(id)).slice(0, 6);

  return (
    <div className="job-details-container">
      <div className="container">
        <img src={job.companyImage} alt={job.companyName} width="120" />
        <h1>{job.role}</h1>
        <h3 className="head">{job.companyName}</h3>

        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Job Type:</strong> {job.typeOfJob}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Batch:</strong> {job.batch}</p>

        <hr />

        <h2 className="head">Job Description</h2>
        <p>{job.jobDescription}</p>

        <h2 className="head">Responsibilities</h2>
        <ul>
          {job.responsibilities.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>

        <h2 className="head">Eligibility</h2>
        <ul>
          {job.eligibility.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>

        <h2 className="head">Skills Required</h2>
        <ul>
          {job.skills.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>

        <h2 className="head">About Company</h2>
        <p>{job.aboutCompany}</p>

        <h2 className="head">Apply Here</h2>
        <a href={job.ApplyLink} target="_blank" rel="noopener noreferrer">
          Click here to apply
        </a>
      </div>



      <hr />
      <h2>More Jobs You May Like: </h2>

      {/* ✅ Render Jobcards component directly */}
      <div className="more-jobs-section">
        {moreJobs.map((item) => (
          <Jobcards
            key={item.id}
            id={item.id}
            role={item.role}
            companyName={item.companyName}
            companyImage={item.companyImage}
            location={item.location}
            experience={item.experience}
            typeOfJob={item.typeOfJob}
          />
        ))}
      </div>
    </div>
  );
}

export default JobDetails;
