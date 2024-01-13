import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {useControls} from "leva";
import Cursor from "./components/Cursor";
import { Suspense, useState } from "react";
import Section from "./components/Section";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

const App = () => {
    // const {color} = useControls({color: "#8f8fad"});
    const [pageNo, setPageNo] = useState(0);
    
    return (
        <>
            <Canvas camera={{ position: [0, 1.8, 4], fov: 50 }} shadows>
                <color attach="background" args={["#8f8fad"]} />
                <ScrollControls pages={4} damping={0.1}>
                    <Scroll>
                        <Suspense>
                            <Experience />
                        </Suspense>
                    </Scroll>
                    <Scroll html>
                        <Section>
                            <About />
                        </Section>
                        <Section>
                            <Skill />
                        </Section>
                        <Section>
                            <Project />
                        </Section>
                        <Section>
                            <Contact />
                        </Section>
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Cursor />
        </>
    );
};

export default App;