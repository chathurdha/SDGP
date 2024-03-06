// eslint-disable-next-line react/prop-types
export default function ReviewCard({title, description, rating}) {
    const renderStars = (rating) => {
        const starArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starArray.push(<span key={i} className="star" style={{color:"#81C7A2"}}>&#9733;</span>);
            } else {
                starArray.push(<span key={i} className="star">&#9734;</span>);
            }
        }
        return starArray;
    };

    return (
        <div className='w-1/2 rounded-2xl  bg-[#E8E8E8] p-4 mx-auto my-4'>
            <div className='flex flex-row place-content-between'>
                <h1 className='text-2xl font-bold text-gray-800 w-1/2 text-left'>{title}</h1>
                <div className="flex items-center  mb-5">
                    {renderStars(rating)}
                </div>
            </div>
            <div className='mt-2'>
                <p className='text-sm font-mono'>{description}</p>
            </div>
        </div>)
}