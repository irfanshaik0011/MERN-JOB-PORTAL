import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null); // Initialize job as null to handle loading state

    useEffect(() => {
        fetch(`http://https://mern-job-portal-backend-vjwg.onrender.com/all-jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))
            .catch(error => console.error('Error fetching job details:', error));
    }, [id]);

    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    };

    if (!job) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 font-semibold'>
            <PageHeader title={"Job Detail Page"} path={"single job"} />
            <h1>Job Details: {id}</h1>
            <h2>{job.jobTitle}</h2>
            <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>APPLY NOW</button>

            <div className='mt-6'>
                <h3>Company Name: {job.companyName}</h3>
                <p><strong>Location:</strong> {job.jobLocation}</p>
                <p><strong>Employment Type:</strong> {job.employmentType}</p>
                <p><strong>Salary:</strong> {job.minPrice} - {job.maxPrice} {job.salaryType}</p>
                <p><strong>Posting Date:</strong> {job.postingDate}</p>
                <p><strong>Description:</strong> {job.description}</p>
            </div>

            <div className="job-content">
                <h3 className="text-lg font-semibold mb-2">Job Details</h3>
                <p className="mb-4">{job.description}</p>
                <div className="job-benefits mb-4">
                    <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                    <ul className="list-disc list-inside">
                        <li>$60 - 80k</li>
                        <li>Disability insurance</li>
                        <li>Employee discount</li>
                        <li>Flexible spending account</li>
                        <li>Health insurance</li>
                    </ul>
                </div>
                <div className="job-outline mb-4">
                    <h4 className="text-lg font-semibold mb-2">Outline</h4>
                    <p>Grand Canyon Education (GCE) is a rapidly growing educational service company that has long been an industry leader in providing educational, operational, and technological support services to the post-secondary education sector. We put people first, drive innovation, and do good in the community that we live and work in.</p>
                </div>
                <div className="job-future mb-4">
                    <h4 className="text-lg font-semibold mb-2">Future Growth</h4>
                    <p>An industry leader in providing educational, operational, and technological support services to the post-secondary education sector. We put people first, drive innovation, and do good in the community that we live and work in.</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
