import React, { useEffect, useRef, useState } from 'react'

const CURSOR_SPEED = 0.08;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

const Cursor = () => {
    const cursorRef = useRef();
    const [hoverButton, setHoverButton] = useState(false);

    const animate = () => {
        outlineX += (mouseX - outlineX) * CURSOR_SPEED;
        outlineY += (mouseY - outlineY) * CURSOR_SPEED;

        cursorRef.current.style.left = outlineX + "px";
        cursorRef.current.style.top = outlineY + "px";

        requestAnimationFrame(animate);
    }

    useEffect(()=>{
        const mouseMoveEventListener = document.addEventListener("mousemove", (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        const animateEvent = requestAnimationFrame(animate);

        return ()=>{
            document.removeEventListener("mousemove", mouseMoveEventListener);
            cancelAnimationFrame(animateEvent);
        }
    })

    useEffect(()=> {
        const mouseEventListener = document.addEventListener("mouseover", (e) => {
            if(e.target.tagName.toLowerCase() === "button" || e.target.parentElement.tagName.toLowerCase() === "button"){
                // can also use for input and textareas in future
                setHoverButton(true);
            }
            else{
                setHoverButton(false);
            }
        })

        return ()=>{
            document.removeEventListener("mouseover", mouseEventListener);
        }
    }, []);

    return (
        <div 
            className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform ${hoverButton ? "bg-transparent border-2 border-indigo-900 w-5 h-5" : "bg-indigo-500 w-3 h-3"}`}
            ref={cursorRef}
        >
            
        </div>
    )
}

export default Cursor;