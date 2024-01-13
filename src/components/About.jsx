import React from 'react'

const About = () => {
    return (
        <div className='px-28'>
            <h1 className='text-6xl font-extrabold leading-snug'>
                Hi, I,m
                <br />
                <span className="px-1 bg-purple-400">Kapil Paliwal</span>
            </h1>
            <p className='text-lg text-gray-600 mt-4'>
                I am a Mern Stack Developer
                <br />
                Learning about new technologies like Three.js
            </p>
            <button className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-12'>
                Contact me
            </button>
        </div>
    )
}

export default About;