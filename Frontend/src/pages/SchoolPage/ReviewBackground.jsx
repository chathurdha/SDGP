import SchlHeader from "../../components/Header/SchlHeader.jsx";
import SchlNavBar from "../../components/navbar/SchlNavBar.jsx";
import Card from "../../components/Common/PastE-Sections/Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ReviewBackground() {
 const [seminars, setSeminars] = useState(null);

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await axios.get("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
                setSeminars(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSeminars();
    }, []);

    const completedSeminars = seminars && seminars.filter((seminar) => seminar.status === 'completed');

    return (
        <>
            <SchlHeader/>
            <SchlNavBar/>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-24 px-9">
                {completedSeminars &&
                    completedSeminars.map((seminar) => (
                        <Card
                            key={seminar._id}
                            seminar={seminar}
                            className="w-full" // Added w-full and border class
                        />
                    ))}
            </div>

        </>
    );
}

