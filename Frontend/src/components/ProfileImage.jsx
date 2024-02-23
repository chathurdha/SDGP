const ProfileImage = ({schoolId}) => {
    const image = "./images/" + schoolId + ".jpeg";
  
    return (
      <div className="w-full rounded-full overflow-hidden">
        <img src={image} alt="Image description" className="w-full h-full object-cover" />
      </div>
    );
  };
 
export default ProfileImage;