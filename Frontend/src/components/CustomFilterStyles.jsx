export const CustomFilterStyles = {
    container: (provided) => ({
      ...provided,
      backgroundColor: '#fff', // White background
      border: '1px solid #e2e8f0', // Light border
      borderRadius: '4px', // Rounded corners
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f8f9fa', // Light grey background
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // Subtle shadow
      ':hover': {
        borderColor: '#e2e8f0', // Highlight border on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#495057', // Black for default, white for selected
      backgroundColor: state.isSelected ? '#8B46DF' : '#fff', // Blue for selected, white for others
      padding: '8px 12px', // Consistent padding
      ':hover': {
        backgroundColor: '#e9ecef', // Lighter background on hover
        color: '#495057', // Black text on hover
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9ca3af', // Lighter grey for placeholder
    }),
    valueContainer: (provided) => ({
      ...provided,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // Additional styling for value container (optional)
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '200px',
      overflowY: 'auto',
      borderRadius: '4px', // Rounded corners for menu
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Subtle shadow
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none', // No indicator separator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#8B46DF', // Custom color for dropdown indicator
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#8B46DF', // Custom color for clear indicator
    }),
};