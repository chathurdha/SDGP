const ProcessDateAndTime = (volunteer) => {
    // Handle potential missing data (same as before)
    const date = volunteer.createdAt ? new Date(volunteer.createdAt) : null;
    const time = volunteer.updatedAt ? new Date(volunteer.updatedAt) : null;
  
    // Format date (using padStart for consistent day/month length)
    const formattedDate = date?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
      .split('/')
    //   .reverse()
      .join('.') || 'N/A';
  
    // Format time (using toLocaleTimeString with some adjustments)
    const formattedTime = time?.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    || 'N/A';
  
    // Return formatted date and time
    return { formattedDate, formattedTime };
  };
export default ProcessDateAndTime;