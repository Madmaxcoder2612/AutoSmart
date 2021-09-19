import { Link } from "react-router-dom"
import CombustionEngine from "../CombustionEngine/CombustionEngine"
import F6Boxer from "../F6Boxer/F6Boxer"
import Turbofan from "../Turbofan/Turbofan"
import V8Pontic from "../V8Pontiac/V8Pontiac"

export default function Models3D() {
    return (
        <div style={{backgroundColor: "#1F1627"}} className="pt-20">
            <Link to="/" className="text-white ml-4 mt-4">Go back</Link>
            <CombustionEngine />
            <F6Boxer />
            <Turbofan />
            <V8Pontic />
        </div>
    )
}
