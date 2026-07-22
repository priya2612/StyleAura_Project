import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

            <div className="container">

                {/* Logo */}

                <Link className="navbar-brand logo" to="/">
                    <div className="brand-logo">
                        <span className="style">StyleAura</span>

                    </div>
                </Link>

                {/* Mobile Toggle */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">

                    {/* Navigation */}

                    <ul className="navbar-nav ms-4">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        {/* Categories */}

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Categories
                            </a>

                            <ul className="dropdown-menu">

                                <li><Link className="dropdown-item" to="/category/ethnic">Ethnic Wear</Link></li>

                                <li><Link className="dropdown-item" to="/category/western">Western Wear</Link></li>

                                <li><Link className="dropdown-item" to="/category/kurtis">Kurtis</Link></li>

                                <li><Link className="dropdown-item" to="/category/sarees">Sarees</Link></li>

                                <li><Link className="dropdown-item" to="/category/tops">Tops</Link></li>

                                <li><Link className="dropdown-item" to="/category/jeans">Jeans</Link></li>

                               

                                

                            </ul>

                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/new-arrivals">
                                New Arrivals
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/sale">
                                Sale
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                    </ul>

                    {/* Search */}

                    <form className="d-flex mx-lg-auto my-3 my-lg-0 search-box">

                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search dresses, kurtis..."
                        />

                    </form>

                    {/* Icons */}

                    <div className="d-flex align-items-center">

                        <Link to="/wishlist" className="icon-btn me-3">
                            <i className="bi bi-heart"></i>
                        </Link>

                        <Link
                            to="/cart"
                            className="icon-btn me-3 position-relative"
                        >
                            <i className="bi bi-cart3"></i>

                            <span className="badge bg-danger rounded-pill cart-badge">
                                0
                            </span>

                        </Link>

                        <Link
                            to="/login"
                            className="btn login-btn"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;