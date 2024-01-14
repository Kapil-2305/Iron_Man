import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {useControls} from "leva";
import Cursor from "./components/Cursor";
import { Suspense, useEffect, useState } from "react";
import Section from "./components/Section";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import ScrollManager from "./components/ScrollManager";

const App = () => {
    // const {color} = useControls({color: "#8f8fad"});
    const [section, setSection] = useState(0);
    const [started, setStarted] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(()=>{
        setMenuOpened(false);
    }, [section]);
    
    return (
        <>
            <Canvas camera={{ position: [1.2, 1.8, 4], fov: 50 }} shadows>
                <color attach="background" args={["#8f8fad"]} />
                <ScrollControls pages={4} damping={0.1}>
                    <ScrollManager section={section} onSectionChange={setSection} />
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