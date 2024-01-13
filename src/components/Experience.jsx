import { useRef, useState } from "react";
import Background from "./Background";
import Kapil from "./Kapil"
import { motion } from "framer-motion-3d"
import { useThree } from "@react-three/fiber";

const Experience = () => {
    const characterGroup = useRef();
    const officeScaleRatio = 0.0008;
    const { viewport } = useThree();
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <Background />
            <ambientLight intensity={2.8}/>
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <group>
                <Kapil />
            </group>
        </>
    )
}

export default Experience;