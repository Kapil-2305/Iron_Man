import Background from "./Background";
import Kapil from "./Kapil"


const Experience = () => {
    return (
        <>
            <Background />
            <ambientLight intensity={2.8}/>
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <group position={[0, -1, 0]}>
                <Kapil />
            </group>
        </>
    )
}

export default Experience;