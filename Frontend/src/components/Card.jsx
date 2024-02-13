import Ratings from './Ratings';

const Card = ({seminar}) => {

    const imagePath = './images/' + seminar._id +'.jpeg';

    return ( 
        <div className='bg-white rounded-lg shadow-md mb-4 md:w-1/2 lg:w-1/3'>
            <img src={imagePath} alt={seminar.name + " image :" + seminar._id} className='w-full h-60 object-cover mb-2 rounded-lg'/>
            <div className='mt-4 text-left pl-4'>
                <h2 className='text-2xl font-semibold'>{seminar.name}</h2>
                <h1 className='text-[1rem] pt-4'>{seminar.description}</h1>
                <div className='text-[0.8rem] pt-4 pb-2 pr-2 flex flex-row justify-between'>
                    <Ratings rating={seminar.rating} />
                    <p className='text-right'>2 days ago</p>
                    {/* <p>{seminar.createdAt}</p> */}{/* when the issue of backend is solved add this instead of '2 days ago' */}
                </div>
            </div>
        </div>
     );
}
 
export default Card;