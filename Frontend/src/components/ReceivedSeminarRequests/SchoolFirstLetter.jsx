/* eslint-disable react/prop-types */
const SchoolFirstLetter = ({ name }) => {
    // Split the name into words and limit to the first two
    const words = name.split(" ").slice(0, 2);
  
    // Combine the first letters of each word
    const firstLetters = words.map((word) => word[0].toUpperCase()).join("");
  
    return (
      <p className="font-bold text-xl">
        {firstLetters}
      </p>
    );
  };
  
  export default SchoolFirstLetter;

  /* eslint-enable react/prop-types */
