import React from 'react'
import Rated from '../../assets/Rated.png'
import NonRated from '../../assets/NonRated.png'
function ProfileCard({AccType, Name, Pic, Desc, Rate, ReviewCount, Details}) {

    const Profile = (AccType) => {
        if  (AccType === 'Org'){
            return(
               <span> Organization</span> 
            );
        }else if (AccType === 'Scl'){
            return(
                <span> School</span>
            );
        } else if (AccType === 'Vol'){
            return(
                <span> Volunteer</span>
            );
        };
    }

    const DetailDataArray = Details.map((DetArray, index) => {
        console.log(DetArray.Desc);
        return (
            <div key={index}>
                <div>
                    <ul>
                        {DetArray.Desc}
                    </ul>
                </div>
                <div>
                    <ul>
                        {DetArray.Val}
                    </ul>
                </div>
            </div>    
        );
    });
    
  return (
    <div>
        <div>
            <div>
                <p>
                Welcome, {Name} {Profile(AccType)}
                </p>
            </div>
        </div>
        <div>
            <div>
                <div>
                    
                    <img src={Pic} alt={Name + "'s Profile Picture"} />
                </div>
                <div>
                    <div>
                        
                        <p>
                            {Name} {Profile(AccType)}
                        </p>
                    </div>
                    <div>
                        
                        <p>
                            {Desc}
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={Rated} alt={Rate} />
                            <img src={Rated} alt={Rate} />
                            <img src={Rated} alt={Rate} />
                            <img src={Rated} alt={Rate} />
                            <img src={NonRated} alt={Rate} />
                            <p>
                                {Rate}   ({ReviewCount} reviews)
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                {DetailDataArray}
                </div>
                <div>
                    <div>
                        <button type='button' className='w-1/2 h-12 text-sm text-white bg-[#8260E2] rounded-md mb-9'>
                            <label htmlFor="/">
                                Edit Profile
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard