   
/* eslint-disable react/prop-types */




import { useState, useEffect } from 'react';
import Ratings from '../Common/PastE-Sections/Ratings';
import ProcessDate from '../Common/PastE-Sections/ProcessDate';
import axios from 'axios';
import AddReviewCard from './AddReviewCard.jsx';

import image1 from '../../assets/seminarImages/1.jpeg';
import image2 from '../../assets/seminarImages/2.jpeg';
import image3 from '../../assets/seminarImages/3.jpeg';
import image4 from '../../assets/seminarImages/4.jpeg';
import image5 from '../../assets/seminarImages/5.jpeg';
import image6 from '../../assets/seminarImages/6.jpeg';
import image7 from '../../assets/seminarImages/7.jpeg';
 

const ReviewSemCard = ({ seminar }) => {
    const { formattedDate } = ProcessDate(seminar);
    // const imagePath = './images/' + seminar._id + '.jpeg';
    const [isAddingReview, setIsAddingReview] = useState(false);
    const [hasReview, setHasReview] = useState(false);

    const images = [image1, image2, image3, image4, image5, image6, image7];
    const [randomImagePath, setRandomImagePath] = useState('');

    useEffect(() => {
        // Shuffle function
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        // Shuffle the array of images
        const shuffledImages = shuffleArray(images);
        // Set the randomly selected image path for this component
        setRandomImagePath(shuffledImages[0]);
    }, []);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/reviews');
                const reviews = response.data;
                const hasReviewForSeminar = reviews.some(review => review.seminarId === seminar._id);
                setHasReview(hasReviewForSeminar);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [seminar._id]);

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
                    <img src={randomImagePath} alt={seminar.name + ' image :' + seminar._id} className='w-full h-60 object-cover mb-2 rounded-lg' />
                    <div className='mt-4 text-left pl-4'>
                        <h2 className='text-xl font-semibold'>{seminar.name}</h2>
                        <h1 className='text-[1rem] pt-4'>{seminar.description}</h1>
                        <div className='text-[0.8rem] pt-4 pb-2 pr-2 flex flex-row justify-between'>
                            <Ratings rating={seminar.rating} />
                            <p>{formattedDate}</p>
                        </div>
                        {hasReview ? (
                            <p className="text-green-500">Review Added</p>
                        ) : (
                            <button onClick={handleAddReview} disabled={hasReview} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                                Add a Review
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ReviewSemCard;


/* eslint-enable react/prop-types */

