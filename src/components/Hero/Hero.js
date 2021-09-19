import HeroImg from "../../assets/engine.png"
import { Link } from "react-scroll"

export default function Hero() {
    return (
        <div className="font-popins md:grid md:grid-cols-2 pt-48 px-56 pb-8" id="home" style={{ backgroundColor: "#1F1627" }}>
            <div className="">
                <div className="text-white text-5xl font-extrabold">Making Engineering,<br />
                    a Reality for You</div>
                <div className="w-64 my-4">Lets help discover the dream of every engineering student</div>

                <Link to="armodels">
                    <button className="p-4 mt-4 text-base font-semibold tracking-wider text-white border rounded-2xl shadow-sm font- popins md:w-44 bg-purple-800 hover:shadow-lg ">Get Started</button>
                </Link>
            </div>
            <div>
                <img src={HeroImg} />
            </div>
        </div>
    )
}
