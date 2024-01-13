import { useRef, useState } from "react";
import Background from "./Background";
import Kapil from "./Kapil"
import { motion } from "framer-motion-3d"
import { useThree } from "@react-three/fiber";

const Experience = () => {
    const [section, setSection] = useState(0);

    const characterGroup = useRef();
    const officeScaleRatio = 0.0008;
    const { viewport } = useThree();
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <Background />
            <ambientLight intensity={2.8}/>
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <motion.group
                ref={characterGroup}
                rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
                scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
                animate={"" + section}
                transition={{
                  duration: 0.6,
                }}
                variants={{
                  0: {
                    scaleX: officeScaleRatio,
                    scaleY: officeScaleRatio,
                    scaleZ: officeScaleRatio,
                  },
                  1: {
                    y: -viewport.height + 0.5,
                    x: isMobile ? 0.3 : 0,
                    z: 7,
                    rotateX: 0,
                    rotateY: isMobile ? -Math.PI / 2 : 0,
                    rotateZ: 0,
                    scaleX: isMobile ? 1.5 : 1,
                    scaleY: isMobile ? 1.5 : 1,
                    scaleZ: isMobile ? 1.5 : 1,
                  },
                  2: {
                    x: isMobile ? -1.4 : -2,
                    y: -viewport.height * 2 + 0.5,
                    z: 0,
                    rotateX: 0,
                    rotateY: Math.PI / 2,
                    rotateZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                  },
                  3: {
                    y: -viewport.height * 3 + 1,
                    x: 0.24,
                    z: 8.5,
                    rotateX: 0,
                    rotateY: -Math.PI / 4,
                    rotateZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                  },
                }}
            >
                <Kapil />
            </motion.group>
        </>
    )
}

export default Experience;