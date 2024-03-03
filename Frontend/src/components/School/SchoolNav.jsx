import { Link } from "react-router-dom"

export default function SchoolNav(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
        </nav>
    )
}