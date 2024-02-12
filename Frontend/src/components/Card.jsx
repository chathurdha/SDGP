// import image from '../images/1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';//faStar is the solid star icon

const Card = ({seminar}) => {

    const imagePath = './images/' + seminar._id +'.jpeg';

    return ( 
        <div className='bg-white rounded-lg shadow-md'>
            <img src="/Users/isuru500/Documents/GitHub/SDGP/Frontend/src/images/1.jpeg" alt="" />
            <img src={imagePath} alt={seminar.name + " image :" + seminar._id} className='rounded-t-lg w-full h-48 object-cover'/>
            <div className="p-4">
                <h2 className='text-xl font-bold mb-2'>{seminar.name}</h2>
                <h1 className='text-grey-700'>{seminar.description}</h1>
                {/* <p>{seminar.createdAt}</p> */}{/* when the issue of backend is solved add this */}
                <div className='flex justify-between w-full sm:flex-col sm:w-1/2 gap-4'>
                    <div className='grid grid-cols-2'>
                        <p>4.0</p>{/* add rating later */}
                        <FontAwesomeIcon icon={faStar} className='text-green-600 h-full' />
                    </div>
                    <p>2 days ago</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;