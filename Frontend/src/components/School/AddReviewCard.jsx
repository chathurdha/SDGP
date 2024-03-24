import {useState} from "react";

import SchlNavBar from "../../components/navbar/SchlNavBar";
import SchlHeader from "../../components/Header/SchlHeader";
import Footer from "../../components/Footer/Footer";

export default function AddReviewCard() {
    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const review = {rating, title, description};

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

        if(response.ok){
            setRating('');
            setTitle('');
            setDescription('');
            setError(null)
            console.log('New Review added successfully', json);
        }
    }

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
        <>
        <SchlHeader />
        <SchlNavBar />
        <div className='w-1/2 h-4/5 shadow-2xl rounded-2xl mx-auto py-9'>
            <button type="button"
                    className="flex items-center justify-center ml-4 mt-5 text-sm text-gray-700  rounded-lg gap-1">
                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                </svg>
                <span>Back</span>
            </button>
            <div
                className='flex flex-col items-center justify-center top-1 w-full h-full  space-y-8 bg-white rounded-2xl'>
                <h1 className='text-2xl font-bold text-center text-gray-800 '>Send Review</h1>

                <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`text-3xl cursor-pointer ${
                                rating >= star || hoveredRating >= star ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => handleStarHover(star)}
                            onMouseLeave={handleMouseLeave}
                        >
          &#9733;
        </span>
                    ))}
                </div>


                <form className='flex flex-col items-center justify-center w-full space-y-5' onSubmit={handleSubmit}>
                    <label className='text-sm text-gray-900'>Name of the School</label>
                    <input type="text"
                           onChange={(e) => setTitle(e.target.value)}
                           value={title}
                           className='block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'></input>
                    <label className='text-sm text-gray-900'>Description</label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className='block p-2.5 w-3/4 h-24 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 overflow-visible'></textarea>
                    <button className='w-3/4 h-12 text-sm text-white bg-[#8260E2] rounded-lg'>Send Review
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}