import HeroImg from "../../assets/engine.png"

export default function Hero() {
    return (
        <div className="font-popins md:grid md:grid-cols-2 pt-48 px-56 pb-8" id="home" style={{ backgroundColor: "#1F1627" }}>
            <div className="">
                <div className="text-white text-5xl font-extrabold">Get ahead.<br />
                    Get Job!</div>
                <div className="w-64 my-4">Let's help discover the dream Job
                    of the week.</div>
                <button className="p-4 mt-4 text-base font-semibold tracking-wider text-white border rounded-2xl shadow-sm font- popins md:w-44 bg-purple-800 hover:shadow-lg ">Get Started</button>
            </div>
            <div>
                <img src={HeroImg} />
            </div>
        </div>
    )
}
