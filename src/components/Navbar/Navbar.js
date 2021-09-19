import LogoImg from "../../assets/logo.png"
import { Link } from "react-scroll"
import "./Navbar.css"

export default function Navbar() {
    return (
        <header class="header" id="header" style={{ backgroundColor: "#1F1627" }}>
            <nav class="nav container">
                <img class="nav__logo logo" src={LogoImg} width="150" height="150" ALT="logo" />
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <Link activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={250}>
                                <a href="" class="nav__link active-link">Home
                                </a>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={250}>
                                <a href="" class="nav__link active-link">About
                                </a>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={250}>
                                <a href="" class="nav__link active-link">Services
                                </a>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link activeClass="active"
                                to="armodels"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={250}>
                                <a href="" class="nav__link active-link">AR Models
                                </a>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={250}>
                                <a href="" class="nav__link active-link">Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div class="nav__btns">
                </div>
            </nav>
        </header>
    )
}
