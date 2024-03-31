/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Ratings from './Ratings';
import ProcessDate from './ProcessDate';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

// Import images
import image1 from '../../../assets/seminarImages/1.jpeg';
import image2 from '../../../assets/seminarImages/2.jpeg';
import image3 from '../../../assets/seminarImages/3.jpeg';
import image4 from '../../../assets/seminarImages/4.jpeg';
import image5 from '../../../assets/seminarImages/5.jpeg';
import image6 from '../../../assets/seminarImages/6.jpeg';
import image7 from '../../../assets/seminarImages/7.jpeg';
import image8 from '../../../assets/seminarImages/8.jpeg';
import image9 from '../../../assets/seminarImages/9.jpeg';
import image10 from '../../../assets/seminarImages/10.jpeg';
import image11 from '../../../assets/seminarImages/11.jpeg';
import image12 from '../../../assets/seminarImages/12.jpeg';
import image13 from '../../../assets/seminarImages/13.jpeg';
import image14 from '../../../assets/seminarImages/14.jpeg';
import image15 from '../../../assets/seminarImages/15.jpeg';
import image16 from '../../../assets/seminarImages/16.jpeg';
import image17 from '../../../assets/seminarImages/17.jpeg';

const Card = ({ seminar }) => {
    const [type, setType] = useState(false);
    const { user } = useUser();
    const { formattedDate } = ProcessDate(seminar);
    const [status, setStatus] = useState(seminar.status);
    const today = new Date().toISOString().split('T')[0];

    // Array of image paths
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17];

    // State to store the randomly selected image path
    const [randomImagePath, setRandomImagePath] = useState('');

    useEffect(() => {
        if (user?.unsafeMetadata?.Type === "Organization") {
            setType(true);
        } else {
            setType(false);
        }
    }, [user]);

    // Shuffle the array of image paths
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

    const handleCompleted = async () => {
        if (status !== 'completed') {
            try {
                const response = await axios.patch(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars/${seminar._id}`, { status: 'completed' });
                if (response.status === 200) {
                    setStatus('completed');
                }
            } catch (error) {
                console.error('Error marking seminar as completed:', error);
            }
        }
    };

    return (
        <div className='bg-white rounded-md shadow-md hover:shadow-lg pb-2 mx-2 mb-4'>
            {/* Set src attribute to the randomly selected image path */}
            <img src={randomImagePath} alt={seminar.name + " image :" + seminar._id} className='w-full h-60 object-cover mb-2 rounded-lg' />
            <div className='mt-4 text-left pl-4'>
                <h2 className='text-xl font-semibold'>{seminar.name}</h2>
                <h1 className='text-[1rem] pt-4'>{seminar.description}</h1>
                <div className='text-[0.8rem] pt-4 pb-2 pr-2 flex flex-row justify-between'>
                    <Ratings rating={seminar.rating} />
                    <p>{formattedDate}</p>
                </div>
                {type && today > seminar.expDate && status !== 'completed' && (
                    <button onClick={handleCompleted} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Mark as Completed
                    </button>
                )}
                {type && status === 'completed' && (
                    <p className="text-green-500 font-semibold">Completed</p>
                )}
            </div>
        </div>
    );
}

export default Card;
