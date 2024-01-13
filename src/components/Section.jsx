import React from 'react'

const Section = (props) => {
    const {children} = props;
    return (
        <section className={`h-screen w-screen p-8  mx-auto flex flex-col items-center justify-center border-blue-500 border-4`}>
            {children}
        </section>
    )
}

export default Section;