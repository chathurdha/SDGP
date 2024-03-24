import { useState } from 'react';
import Ratings from '../Common/PastE-Sections/Ratings';
import ProcessDate from '../Common/PastE-Sections/ProcessDate';
import axios from 'axios';
import AddReviewCard from './AddReviewCard.jsx';

const ReviewSemCard = ({ seminar }) => {
    const { formattedDate } = ProcessDate(seminar);
    const imagePath = './images/' + seminar._id + '.jpeg';
    const [isAddingReview, setIsAddingReview] = useState(false);

    const handleAddReview = () => {
        setIsAddingReview(true);
    };

    const handleClosePopup = () => {
        setIsAddingReview(false);
    };

    return (
        <>
            {isAddingReview ? (
                <AddReviewCard seminar={seminar} onClose={handleClosePopup} />
            ) : (
                <div className='bg-white rounded-md shadow-md hover:shadow-lg pb-2 mx-2 mb-4'>
                    <img src={imagePath} alt={seminar.name + ' image :' + seminar._id} className='w-full h-60 object-cover mb-2 rounded-lg' />
                    <div className='mt-4 text-left pl-4'>
                        <h2 className='text-xl font-semibold'>{seminar.name}</h2>
                        <h1 className='text-[1rem] pt-4'>{seminar.description}</h1>
                        <div className='text-[0.8rem] pt-4 pb-2 pr-2 flex flex-row justify-between'>
                            <Ratings rating={seminar.rating} />
                            <p>{formattedDate}</p>
                        </div>
                        <button onClick={handleAddReview} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                            Add a Review
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReviewSemCard;
