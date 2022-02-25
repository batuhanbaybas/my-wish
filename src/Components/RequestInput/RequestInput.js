import React from 'react'

const RequestInput = () => {
    const handleClick = () => {
        alert("İstek atıldı")
    }
    return (
        <>
            <select className='text-center p-2'>
                <option value='GET'>GET</option>
                <option value='POST'>POST</option>
                <option value='PUT'>PUT</option>
                <option value='DELETE'>DELETE</option>
            </select>

            <input className='w-full outline-none p-1' />
            <button onClick={handleClick} className='bg-slate-300 w-fit px-5' >İSTEK</button>
        </>
    )
}

export default RequestInput