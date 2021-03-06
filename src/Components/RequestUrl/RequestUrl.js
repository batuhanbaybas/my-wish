import React, { useRef } from 'react'
import { fetchData, sendData } from '../../Bloc/fetchData_Bloc'
import CustomBotton from '../Button/CustomButton'

const ReequestUrl = () => {
    const selectRef = useRef()
    const urlRef = useRef()


    const handleClick = () => {
        if (urlRef.current.value.trim().length > 0) {
            selectRef.current.value === "GET" || selectRef.current.value === "DELETE" ?
                fetchData(urlRef.current.value, selectRef.current.value)
                : sendData(urlRef.current.value, selectRef.current.value)
        } else {
            return alert("Lütfen bir API route u giriniz")
        }
    }




    return (
        <div className='flex justify-between border-2'>
            <select ref={selectRef} className='text-center p-2'>
                <option value='GET'>GET</option>
                <option value='POST'>POST</option>
                <option value='PUT'>PUT</option>
                <option value='PATCH'>PATCH</option>
                <option value='DELETE'>DELETE</option>
            </select>

            <input ref={urlRef} className='w-full outline-none px-2' />
            <CustomBotton function={handleClick} className="bg-slate-300 w-fit px-5 flex justify-center items-center cursor-pointer  hover:bg-slate-700 hover:text-white" innerText="İSTEK" />
        </div>
    )
}

export default ReequestUrl