import React, { useRef } from 'react'
import { fetchData } from '../../Bloc/fetchData_Bloc'

const ReequestUrl = () => {
    const selectRef = useRef()
    const urlRef = useRef()


    const handleClick = () => {
        selectRef.current.value === "GET" ?
            fetchData(urlRef.current.value, selectRef.current.value)
            : console.log("diğerleri seçili")

    }
    return (
        <div className='flex justify-between border-2'>
            <select ref={selectRef} className='text-center p-2'>
                <option value='GET'>GET</option>
                <option value='POST'>POST</option>
                <option value='PUT'>PUT</option>
                <option value='DELETE'>PATCH</option>
                <option value='DELETE'>DELETE</option>
            </select>

            <input ref={urlRef} className='w-full outline-none p-1' />
            <button onClick={handleClick} className='bg-slate-300 w-fit px-5' >İSTEK</button>
        </div>
    )
}

export default ReequestUrl