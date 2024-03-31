const ProcessDate = (seminar) => {

    const date = seminar.expDate ? new Date(seminar.expDate) : null;

    // Format date (using padStart for consistent day/month length)
    const formattedDate = date?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        })
        .split('/')
        //   .reverse()
        .join('.') || 'N/A';

    return { formattedDate };
}
 
export default ProcessDate;