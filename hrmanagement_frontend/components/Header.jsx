import { Link } from "react-router-dom"
import './Header.css'
function Header() {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/About">about us</Link>
            <Link to="/contact">contact us</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}
export default Header