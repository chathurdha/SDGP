import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';//faStar is the solid star icon

const Ratings = (seminar) => {

    // Handle potential zero or undefined ratings
    if (!seminar.rating || seminar.rating === 0) {
        return null;
    }

    const wholeStars = Math.floor(seminar.rating);
    const fractionalPart = seminar.rating - wholeStars;

    // console.log(seminar);
    return ( 
        <div className="flex flex-row">
            <p>{seminar.rating}</p>
            <div className='pl-1'>
                {/* Render full stars */}
                {Array.from({ length: wholeStars }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-green-600" />
                ))}
        
                {/* Render a half star, if applicable */}
                {fractionalPart > 0 && (
                <FontAwesomeIcon key={wholeStars} icon={faStarHalf} className="text-green-600" />
                )}
            </div>
        </div>
     );
}
 
export default Ratings;