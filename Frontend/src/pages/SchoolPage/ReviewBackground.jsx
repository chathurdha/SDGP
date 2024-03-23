// // import AddReview from "../components/AddReview.jsx";
// // import ReviewCard from "../ReviewCard.jsx";
// import {useEffect, useState} from "react";
//
// export default function ReviewBackground() {
//     const [reviews, setReviews] = useState(null)
//
//     useEffect(() => {
//         const fetchReviews = async () => {
//             const response = await fetch('http://localhost:4000/api/reviews/')
//
//
//             if(response.ok){
//                 const json = response.json()
//                 console.log(json)
//                 setReviews(json)
//             }
//         }
//         fetchReviews()
//     }, []);
//     return(
//         <div className='w-screen h-screen '>
//     <div>
//         {reviews && reviews.map((review) => (
//             <p key={review._id}>{review.title}</p>
//             ))}
//     </div>
//         </div>
//     )
// }
//
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
        <div className='w-screen'>
            {reviews.length > 0 && reviews.map((review) => (
                <ReviewCard key={review._id} title={review.title} description={review.description} rating={review.rating} />
            ))}
        </div>
    );
}

