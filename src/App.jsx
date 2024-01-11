import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {useControls} from "leva";

const App = () => {
    const {color} = useControls({color: "#171720"});
    const {enable} = useControls({enable: {value: true, label: "Enable Orbit Controls"}});
    const {autoRotate} = useControls({autoRotate: {value: false, label: "Auto Rotate"}});
    
    return (
        <>
            <Canvas camera={{ position: [0, 1.8, 5], fov: 50 }} shadows>
                <color attach="background" args={[color]} />
                <Experience />
            </Canvas>
        </>
    );
};

export default App;