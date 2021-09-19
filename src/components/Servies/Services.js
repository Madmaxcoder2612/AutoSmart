import Img3D from "../../assets/3d.png"
import ImgAR from "../../assets/AR.png"

export default function Services() {
    return (
        <div className="font-popins" style={{ backgroundColor: "#1F1627" }} id="services" className="pt-10">
            <div className="grid place-content-center text-center">
                <div className="text-white text-5xl font-extrabold">Services</div>
                <div>What we offer</div>
            </div>

            <div className="flex items-center justify-center pb-8 pt-8">
                <div className="grid grid-cols-1 gap-12 font-sourceSerifPro sm:grid-cols-2 md:grid-cols-2">

                    <div className="relative w-72 p-6 my-4 bg-white shadow-xl rounded-3xl">
                        <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                            <img className="w-12" src={Img3D} alt="3D" />
                        </div>
                        <div className="mt-8">
                            <p className="my-2 text-xl font-semibold">Interactive 3D Models</p>
                            <div className="flex space-x-2 font-medium text-gray-800 text-basic">
                                <p >Digital 3D models allow students to visualize and interrogate various topics; they reinforce spatial skills, facilitate student recognition of pre-learned various principles in the field, and encourage students to think about their processes and properties.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-72 p-6 my-4 bg-white shadow-xl rounded-3xl">
                        <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                            <img className="w-12" src={ImgAR} alt="AR" />
                        </div>
                        <div className="mt-8">
                            <p className="my-2 text-xl font-semibold">Learn with Augmented Reality</p>
                            <div className="flex space-x-2 text-gray-800 text-basic">
                                <p>Augmented Reality's relative seamlessness of digital objects within the real world encourages interactivity and engagement. It maximizes students' ability to spend their time learning curricular subjects while minimizing the time spent learning how to use the new tech.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
