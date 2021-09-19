import AboutImg from "../../assets/about.png"

export default function About() {
    return (
        <div className="font-popins" style={{ backgroundColor: "#1F1627" }} id="about">
            <div className="grid place-content-center text-center">
                <div className="text-white text-5xl font-extrabold">About</div>
                <div>Our Vision</div>
            </div>

            <div className="font-popins md:grid md:grid-cols-2 pt-8 px-64 pb-8">
                <div>
                    <img src={AboutImg} className="w-96 rounded-md" />
                </div>
                <div className="">
                    <div className="w-full pr-40 my-4">AutoSmart is an AR-based WebApp, that is completely designed for Engineering students and Engineering Working professionals to Experience the feel of Real-time 3D models of Engines and Spare parts of any vehicle, with the inclusion of responsive and spectacular visual arts, that makes E-learning easy.</div>
                </div>
            </div>
        </div>
    )
}
