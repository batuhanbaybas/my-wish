import React from 'react'

const ReequestUrl = () => {
    const handleClick = () => {
        alert("İstek atıldı")
    }
    return (
        <div className='flex justify-between border-2'>
            <select className='text-center p-2'>
                <option value='GET'>GET</option>
                <option value='POST'>POST</option>
                <option value='PUT'>PUT</option>
                <option value='DELETE'>DELETE</option>
            </select>

            <input className='w-full outline-none p-1' />
            <button onClick={handleClick} className='bg-slate-300 w-fit px-5' >İSTEK</button>
        </div>
    )
}

export default ReequestUrl