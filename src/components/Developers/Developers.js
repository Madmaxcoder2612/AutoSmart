import HarshalImg from "../../assets/dev1.png"
import HarnishImg from "../../assets/dev2.png"
import AbhishekImg from "../../assets/dev3.png"
import VarunImg from "../../assets/dev4.png"

export default function Developers() {
    return (
        <>
            <section class="developers section" style={{ backgroundColor: "#1F1627" }}>

                <div className="grid place-content-center text-center">
                    <div className="text-white text-5xl font-extrabold">Developers</div>
                    <div>Top Contributors</div>
                </div>

                <div className="sm:flex flex-wrap sm:pt-20 pt-12 items-center justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/5 p-2">
                        <div className="max-w-lg shadow-md rounded border border-gray-200 bg-white">
                            <div className="flex flex-col items-center py-8">
                                <div className="w-32 h-32 rounded-full shadow-md">
                                    <img src={HarshalImg} alt className="rounded-full object-cover h-full w-full" />
                                </div>
                                <p className="text-xl text-gray-800 pt-4 pb-1 font-normal">Harshal Raikwar</p>
                                <p className="text-base text-gray-600">Web Developer</p>
                            </div>
                            <div className="border-t border-gray-200 w-full py-4">
                                <p className="text-center text-gray-600 text-base font-normal">I'm passionate about working on open source products & I
                                    like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 p-2">
                        <div className="max-w-lg shadow-md rounded border border-gray-200 bg-white">
                            <div className="flex flex-col items-center py-8">
                                <div className="w-32 h-32 rounded-full shadow-md">
                                    <img src={HarnishImg} alt className="rounded-full object-cover h-full w-full" />
                                </div>
                                <p className="text-xl text-gray-800 pt-4 pb-1 font-normal">Harnish Savsani</p>
                                <p className="text-base text-gray-600">Frontend Developer</p>
                            </div>
                            <div className="border-t border-gray-200 w-full py-4">
                                <p className="text-center text-gray-600 text-base font-normal">Software Engineer with excellent problem-solving skills and
                                    ability to perform well in a team. Passionate about coding and Ui/Ux Designing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 p-2">
                        <div className="max-w-lg shadow-md rounded border border-gray-200 bg-white">
                            <div className="flex flex-col items-center py-8">
                                <div className="w-32 h-32 rounded-full shadow-md">
                                    <img src={AbhishekImg} alt className="rounded-full object-cover h-full w-full" />
                                </div>
                                <p className="text-xl text-gray-800 pt-4 pb-1 font-normal">Abhishek Potekar</p>
                                <p className="text-base text-gray-600">Cloud/IoT Developer</p>
                            </div>
                            <div className="border-t border-gray-200 w-full py-4">
                                <p className="text-center text-gray-600 text-base font-normal">Hardware Project developer and Cloud Enthusiast. Passionate
                                    about Learning AI/ML.Exploring Innovative Ideas in Electronics Engineering.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 p-2">
                        <div className="max-w-lg shadow-md rounded border border-gray-200 bg-white">
                            <div className="flex flex-col items-center py-8">
                                <div className="w-32 h-32 rounded-full shadow-md">
                                    <img src={VarunImg} alt className="rounded-full object-cover h-full w-full" />
                                </div>
                                <p className="text-xl text-gray-800 pt-4 pb-1 font-normal">Varun Sriteja K</p>
                                <p className="text-base text-gray-600">Web Development</p>
                            </div>
                            <div className="border-t border-gray-200 w-full py-4">
                                <p className="text-center text-gray-600 text-base font-normal">I’m a front-end developer and general doodler with a keen eye
                                    for creating engaging UI, bringing products to life. Passionate about AI and Robotics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
