/* eslint-disable react/prop-types */


import Rated from "../../assets/Rated.png";
import NonRated from "../../assets/NonRated.png";
function ProfileCard({ AccType, Name, Pic, Desc, Rate, ReviewCount, Details }) {
  const Profile = (AccType) => {
    if (AccType === "Org") {
      return <span> Organization</span>;
    } else if (AccType === "Scl") {
      return <span> School</span>;
    } else if (AccType === "Vol") {
      return <span> Volunteer</span>;
    }
  };

  const DetailDataArray = Details.map((DetArray, index) => {
    console.log(DetArray.Desc);
    return (
      <div key={index} className="float-none">
        <div className="container-lg flex justify-center items-center ">
          <div className="container-sm float-left w-56 text-left">
            <ul>{DetArray.Desc}</ul>
          </div>
          <div className=" w-16 text-right">
            <ul>{DetArray.Val}</ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="self-center">
      <div>
        <div className="ml-16 mt-5">
          <p className='font-bold text-xl font-["helvetica"]'>
            Welcome, {Name} {Profile(AccType)}
          </p>
        </div>
      </div>
      <div className="border-4 border-blue-400 w-6/12 container-lg flex-col ">
        <div className="items-center">
          <div className="w-32 h-32 border-2 rounded-full mt-4  border-black">
            <img src={Pic} alt={Name + "'s Profile Picture"} className="object-contain md:object-scale-down" />
          </div>
          <div>
            <div>
              <p>
                {Name} {Profile(AccType)}
              </p>
            </div>
            <div>
              <p>{Desc}</p>
            </div>
            <div>
              <div>
                <img src={Rated} alt={Rate} />
                <img src={Rated} alt={Rate} />
                <img src={Rated} alt={Rate} />
                <img src={Rated} alt={Rate} />
                <img src={NonRated} alt={Rate} />
                <p>
                  {Rate} ({ReviewCount} reviews)
                </p>
              </div>
            </div>
          </div>
          <div>{DetailDataArray}</div>
          <div>
            <div>
              <button
                type="button"
                className="w-1/2 h-12 text-sm text-white bg-[#8260E2] rounded-md mb-9"
              >
                <label htmlFor="/">Edit Profile</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;


/* eslint-enable react/prop-types */

