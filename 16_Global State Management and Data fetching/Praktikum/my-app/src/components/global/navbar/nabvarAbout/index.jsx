import ".././index.css";
import { Link, useLocation } from "react-router-dom";
export default function NavbarAbout() {
    const location = useLocation();
    return (
        <>
            <div>
                <p>
                    <Link
                        className={
                            location.pathname === "/"
                                ? "Navlink active fw-bold"
                                : "Navlink"
                        }
                        to='/'
                    >
                        Home
                    </Link>
                </p>
                <p>
                    <Link
                        className={
                            location.pathname === "/about-app"
                                ? "Navlink active fw-bold"
                                : "Navlink"
                        }
                        to='/about-app'
                    >
                        About App
                    </Link>
                </p>
                <p>
                    <Link
                        className={
                            location.pathname === "/about-author"
                                ? "Navlink active fw-bold"
                                : "Navlink"
                        }
                        to='/about-author'
                    >
                        About Author{" "}
                    </Link>
                </p>
            </div>
        </>
    );
}
