import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Link } from "react-router-dom";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/turbine__turbofan_engine__jet_engine/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};

export default function F6Boxer() {

    return (
        <>
            <div className="py-8  ">

            <Link to="/" className="text-white ml-4 mt-4">Go back</Link>

                <div className="md:grid md:grid-cols-2 md:mr-15 mr-1 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-1">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font- popins">Turbofan</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-white font- popins">A turbofan engine, sometimes referred to as a fanjet or bypass engine, is a jet engine variant which produces thrust using a combination of jet core efflux and bypass air which has been accelerated by a ducted fan that is driven by the jet core.</p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font- popins">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-64 w-64" src="https://storage.echoar.xyz/wispy-violet-4999/aa0d5fab-ee55-4e17-a85e-63e46c5310ba" alt="QR" />
                                <a href="https://go.echoar.xyz/8Pzf" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font- popins lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
