import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {useControls} from "leva";
import Cursor from "./components/Cursor";
import { useState } from "react";

const App = () => {
    const {color} = useControls({color: "#8f8fad"});
    const [section, setSection] = useState(0);
    
    return (
        <>
            <Canvas camera={{ position: [0, 1.8, 4], fov: 50 }} shadows>
                <color attach="background" args={[color]} />
                <ScrollControls pages={4} damping={0.1}>
                    <Experience />
                </ScrollControls>
            </Canvas>
            <Cursor />
        </>
    );
};

export default App;