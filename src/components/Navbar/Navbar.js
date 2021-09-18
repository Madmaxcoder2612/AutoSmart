import LogoImg from "../../assets/logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <header class="header" id="header">
            <nav class="nav container">
                <img class="nav__logo logo" src={LogoImg} width="150" height="150" ALT="logo" />
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link">About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#services" class="nav__link">Services
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#company" class="nav__link">R Models
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="nav__btns">
                </div>
            </nav>
        </header>
    )
}
