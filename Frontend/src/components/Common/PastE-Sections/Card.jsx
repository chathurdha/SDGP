 /* eslint-disable react/prop-types */
 import {useEffect, useState} from 'react';
import Ratings from './Ratings';
import ProcessDate from './ProcessDate';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';


const Card = ({ seminar }) => {

    const newStr = seminar.name.replace(" ", "_");

    const [type, setType] = useState(false);
    const {user} = useUser();

    const { formattedDate } = ProcessDate(seminar);
    // const imagePath = './images/' + seminar._id + '.jpeg';
    const imagePath = `./images/${newStr}.jpeg`;

    const [status, setStatus] = useState(seminar.status);
    const today = new Date().toISOString().split('T')[0];

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

    useEffect(() => {
        if (user?.unsafeMetadata?.Type === "Organization") {
          setType(true);
        } else {
          setType(false);
        }
      }, [user]);

    return (
        <div className='bg-white rounded-md shadow-md hover:shadow-lg pb-2 mx-2 mb-4'>
            <img src={imagePath} alt={seminar.name + " image :" + seminar._id} className='w-full h-60 object-cover mb-2 rounded-lg' />
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


/* eslint-enable react/prop-types */

