import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {useControls} from "leva";
import Cursor from "./components/Cursor";

const App = () => {
    const {color} = useControls({color: "#8f8fad"});
    
    return (
        <>
            <Canvas camera={{ position: [0, 1.8, 4], fov: 50 }} shadows>
                <color attach="background" args={[color]} />
                <Experience />
            </Canvas>
            <Cursor />
        </>
    );
};

export default App;