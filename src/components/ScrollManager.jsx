import { useScroll } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const ScrollManager = (props) => {
    const {section, onSectionChange} = props;

    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    useEffect(()=>{
        
    }, [section]);

    

    return null;
}

export default ScrollManager