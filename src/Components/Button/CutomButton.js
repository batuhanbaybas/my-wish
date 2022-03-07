import React from 'react'

const CustomBotton = (props) => {
    return (
        <>
            <button className={props.className} onClick={props.function}> {props.innerText}</button>
        </>
    )
}

export default CustomBotton