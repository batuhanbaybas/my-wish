import React from 'react'

const CustomBotton = (props) => {
    return (
        <>
            <div className={props.className} onClick={props.function}> {props.innerText}</div>
        </>
    )
}

export default CustomBotton