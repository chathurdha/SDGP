
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from "../../components/ReviewCard.jsx";

export default function ReviewBackground() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const api = 'http://localhost:4000/api/reviews/'
            try {
                const response = await axios.get(api);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <div className='w-screen pt-24'>
            {reviews.length > 0 && reviews.map((review) => (
                <ReviewCard key={review._id} title={review.title} description={review.description} rating={review.rating} />
            ))}
        </div>
    );
}

