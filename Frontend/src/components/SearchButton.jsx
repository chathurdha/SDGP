const SearchButton = ({ buttonName, onClick, style }) => {
// const SearchButton = ({ buttonName, onClick }) => {
    return (
        <button
        type="button"
        className={style}
        // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={onClick}
        >
        {buttonName}
        </button>
    );
};
export default SearchButton;