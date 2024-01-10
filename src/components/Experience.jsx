import { OrbitControls } from "@react-three/drei"
import Scene from "./Scene"
import Ironman from "./Ironman"


const Experience = () => {
    return (
        <>
            <ambientLight intensity={2.8}/>
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <OrbitControls />
            <group position={[0, -1, 0]}>
                <Ironman />
            </group>
        </>
    )
}

export default Experience;