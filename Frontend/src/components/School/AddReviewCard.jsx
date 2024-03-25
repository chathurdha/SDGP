 /* eslint-disable react/prop-types */




import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useUser } from '@clerk/clerk-react';

const AddReviewCard = ({ seminar, onClose }) => {
    // const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [hoveredRating, setHoveredRating] = useState(0);
    const [schoolName, setSchoolName] = useState('');

    useEffect(() => {
        const fetchSchoolName = async () => {
            try {
                const seminarResponse = await axios.get(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars/${seminar._id}`);
                const schoolId = seminarResponse.data.schoolId;
                const schoolResponse = await axios.get(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools/${schoolId}`);
                setSchoolName(schoolResponse.data.name);
            } catch (error) {
                console.error('Error fetching school name:', error);
            }
        };

        fetchSchoolName();
    }, [seminar._id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            schoolName: schoolName,
            description: description,
            rating: rating,
            seminarId: seminar._id
        };

        const response = await fetch('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        console.log(error)

        if(response.ok){
            setRating('');
            // setTitle('');
            setDescription('');
            setError(null);
            onClose(); // Close the review card after successful submission
        }
    };

    const handleStarClick = (starRating) => {
        setRating(starRating);
    };

    const handleStarHover = (starRating) => {
        setHoveredRating(starRating);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    return (
        <div className='w-full h-3/4 bg-white rounded-md shadow-md hover:shadow-lg mx-2 mb-4'>
            <button type='button' onClick={onClose} className='flex items-center justify-center ml-4 mt-5 text-sm text-gray-700 rounded-lg gap-1'>
                <svg className='w-5 h-5 rtl:rotate-180' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
                </svg>
                <span>Back</span>
            </button>
            <div className='flex flex-col items-center justify-center w-full h-full space-y-3 bg-white rounded-2xl'>
                <h1 className='text-2xl font-bold text-center text-gray-800'>Send Review</h1>

                <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`text-3xl cursor-pointer ${
                                rating >= star || hoveredRating >= star ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => handleStarHover(star)}
                            onMouseLeave={handleMouseLeave}>
                            &#9733;
                        </span>
                    ))}
                </div>

                <form className='flex flex-col items-center justify-center w-full space-y-3' onSubmit={handleSubmit}>
                    <input
                        value={schoolName}
                        disabled
                        className='w-3/4 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                        placeholder='School Name'
                    />
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className='block p-2.5 w-3/4 h-24 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 overflow-visible'></textarea>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Send Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReviewCard;



 

