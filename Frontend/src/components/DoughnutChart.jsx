import React, {useState, useEffect} from 'react';
import {Chart as ChartJS, defaults} from 'chart.js/auto';
import {Bar, Doughnut} from 'react-chartjs-2';
import {isMobile} from 'react-device-detect';

import SeminarSelect from '../components/SeminarSelect';

const DoughnutChart = () => {

  defaults.maintainAspectRatio = false; // Disable aspect ratio for all charts
  defaults.responsive = true; // Enable responsiveness for all charts

  const [selectedSeminar, setSelectedSeminar] = useState([]);
  const [selectedSeminarObject, setSelectedSeminarObject] = useState(null);

  const seminars = [
    { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "accepted", subject: "subject 1", grade: "grade 1", expStudentCount: 10, expTeacherCount: 2, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "2nd of May, 2022", schoolId: 1, reviewSubmission: "submitted"},
    { _id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2, year: 2022, location: "location 2", status: "accepted", subject: "subject 2", grade: "grade 2", expStudentCount: 20, expTeacherCount: 4, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "3rd of May, 2023", schoolId: 2, reviewSubmission: "submitted"},
    { _id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "rejected", subject: "subject 3", grade: "grade 3", expStudentCount: 30, expTeacherCount: 6, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "4th of May, 2024", schoolId: 3, reviewSubmission: "submitted"},
    { _id: 4, name: "Seminar 4", description: "This is the fourth seminar", rating: 4.5, organizationId: 1, year: 2021, location: "location 1", status: "accepted", subject: "subject 4", grade: "grade 4", expStudentCount: 40, expTeacherCount: 8, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "5th of May, 2022", schoolId: 1, reviewSubmission: "submitted"},
    { _id: 5, name: "Seminar 5", description: "This is the fifth seminar", rating: 5.0, organizationId: 2, year: 2022, location: "location 2", status: "accepted", subject: "subject 5", grade: "grade 5", expStudentCount: 50, expTeacherCount: 10, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "6th of May, 2023", schoolId: 2, reviewSubmission: "not submitted"},
    { _id: 6, name: "Seminar 6", description: "This is the sixth seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "rejected", subject: "subject 6", grade: "grade 6", expStudentCount: 60, expTeacherCount: 12, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "7th of May, 2024", schoolId: 3, reviewSubmission: "not submitted"},
  ];

  const reviewAnalysis = [
    {positive: 60, negative: 33, neutral: 7, seminarId: 1},
    {positive: 45, negative: 30, neutral: 25, seminarId: 2},
    {positive: 70, negative: 20, neutral: 10, seminarId: 3},
    {positive: 80, negative: 10, neutral: 10, seminarId: 4},
  ];

  // filtering the seminars
  const completedSeminars = seminars.filter((seminar) => seminar.reviewSubmission === "submitted");
  console.log(completedSeminars);

  const findReview = (seminarId) => {
    return reviewAnalysis.find((review) => review.seminarId === seminarId);
  };

  const combinedArray = completedSeminars.map((seminar) => {
    const review = findReview(seminar._id);
    return {
      ...seminar,
      positiveReview: review ? review.positive : 0,
      negativeReview: review ? review.negative : 0,
      neutralReview: review ? review.neutral : 0,
    };
  });
  console.log(combinedArray);

  const seminarOptions = combinedArray.map((seminar) => ({
    value: seminar._id,
    label: seminar.name,
  }));
  console.log(seminarOptions);

  const handleSeminarChange = (selectedSeminar) => {
    setSelectedSeminar(selectedSeminar);

    try {
      const matchingSeminar = combinedArray.find(
        (seminar) => seminar._id === selectedSeminar.value
      );
      setSelectedSeminarObject(matchingSeminar);
    } catch (error) {
      setSelectedSeminarObject(null); // Handle error by resetting
      console.error('Error occurred while fetching data. Please try again.');
    }
  };

  useEffect(() => {
    const reviews = selectedSeminarObject ? getReviewData(selectedSeminarObject) : null; // Conditionally create reviews
    setReviews(reviews); // Update reviews state
  }, [selectedSeminarObject]);

  const getReviewData = (seminar) => {
    return {
      labels: ['Positive', 'Negative', 'Neutral'],
      datasets: [
        {
          label: 'Review Analysis',
          data: [seminar.positiveReview, seminar.negativeReview, seminar.neutralReview],
          backgroundColor: ['#2ECC71', '#FF4136', '#D3D3D3'],
          borderColor: ['#2ECC71', '#FF4136', '#D3D3D3'],
          borderWidth: 1,
        },
      ],
    };
  };

  const [reviews, setReviews] = useState(null);

  return (
    <div className=''>
        <h2 className="text-xl font-bold text-left mt-12 text-gray-800">
        Review Sentiment Analysis
        </h2>

        <div className='flex justify-center mt-8'>
            <div className={`justify-center bg-gray-100 p-4 rounded-md shadow-md lg:w-2/3 w-full ${
                !isMobile ? 'flex flex-row' : 'flex flex-col'
            }`}>
                <div className="flex flex-col mb-2  md:m-6">
                    <p className="text-left text-gray-600 mb-4">
                    Choose a seminar that you want to see the sentimental analysis of the reviews.
                    </p>
                    <SeminarSelect
                    options={seminarOptions}
                    onSelectionChange={handleSeminarChange}
                    selectedValue={selectedSeminar}
                    />
                </div>
                <div className="w-full h-60 md:my-10">
                    {reviews && (
                    <Doughnut
                        data={reviews}
                        options={{
                        legend: {
                            display: false, // Remove legend
                        },
                        }}
                        className="w-full"
                    />
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default DoughnutChart;