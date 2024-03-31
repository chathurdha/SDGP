import SchlHeader from "../../components/Header/SchlHeader.jsx";
import SchlNavBar from "../../components/navbar/SchlNavBar.jsx";
import ReviewSemCard from "../../components/School/ReviewSemCard.jsx";
import AddReviewCard from "../../components/School/AddReviewCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

export default function ReviewBackground() {
    const [seminars, setSeminars] = useState(null);
    const [schools, setSchools] = useState(null);
    const [completedSeminars, setCompletedSeminars] = useState([]);
    const [showAddReviewPopup, setShowAddReviewPopup] = useState(false);
    const user = useUser().user.id;
    console.log(user);

    // useEffect(() => {
    //     const fetchSeminars = async () => {
    //         try {
    //             const seminarsResponse = await axios.get(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars`);
    //             setSeminars(seminarsResponse.data);
    //             console.log(seminarsResponse.data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     const fetchSchool = async () => {
    //         try {
    //             const schoolResponse = await axios.get(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools/`);
    //             setSchools(schoolResponse.data);
    //             console.log(schools);
    //         } catch (error) {
    //             console.error('Error fetching school id:', error);
    //         }
    //     }
    //     fetchSchool()
    //     fetchSeminars();
    // }, [user]);

    useEffect(() => {
        const fetchData = async (apiUrl) => {
          try {
            const response = await axios.get(apiUrl);
            switch (apiUrl) {
              case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools":
                setSchools(response.data);
                console.log(response.data);
                break;
              case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars":
                setSeminars(response.data);
                console.log(response.data);
                break;
              default:
                console.warn("Unexpected API URL:", apiUrl);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            // setLoading(false);
          }
        };
    
        fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools");
        fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
      }, []);

    useEffect(() => {
        if (!schools || !seminars) return;
        console.log(schools);
        console.log(seminars);
        const currentSchoolId = schools.find((school) => school.userID === user);
        console.log(currentSchoolId)
        const completedSeminars = seminars && seminars.filter((seminar) => seminar.status === 'completed' && seminar.schoolId === currentSchoolId._id);
        setCompletedSeminars(completedSeminars);
        console.log(completedSeminars);
    }, [schools, seminars, user]);

    const handleAddReview = () => {
        setShowAddReviewPopup(true);
    };

    const handleClosePopup = () => {
        setShowAddReviewPopup(false);
    };

    return (
        <>
            <SchlHeader />
            <SchlNavBar />

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-24 px-9">
                {completedSeminars &&
                    completedSeminars.map((seminar) => (
                        <ReviewSemCard
                            key={seminar._id}
                            seminar={seminar}
                            onAddReview={handleAddReview} // Pass the function to toggle the popup
                            className="w-full" // Added w-full and border class
                        />
                    ))}
            </div>

            {/* Conditionally render the AddReviewCard popup */}
            {showAddReviewPopup && <AddReviewCard onClose={handleClosePopup} />}
        </>
    );
}
