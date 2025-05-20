import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container ml-5">

                {/* Logo and Toggler */}
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
                </Link>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/signup">Signup </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}