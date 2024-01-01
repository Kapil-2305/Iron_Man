import { OrbitControls } from "@react-three/drei"
import Scene from "./Scene"
import Ironman from "./Ironman"


const Experience = () => {
    return (
        <>
            <ambientLight />
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <OrbitControls />
            <group position={[0, -2, 0]}>
                <Ironman />
            </group>
        </>
    )
}

export default Experience