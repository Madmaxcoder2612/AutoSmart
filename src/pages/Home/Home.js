import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Services from "../../components/Servies/Services"
import ARModals from "../../components/ARModals/ARModals"
import Devlopers from "../../components/Developers/Developers"
import ContactUs from "../../components/ContactUs/ContactUs"
import Footer from "../../components/Footer/Footer"

export default function Home() {
    return (
        <div className="">
            <Hero />
            <About />
            <Services />
            <ARModals />
            <Devlopers />
            <ContactUs />
            <Footer />
        </div>
    )
}
