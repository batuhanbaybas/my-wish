import React, { useState } from 'react'
import { token } from '../../Bloc/fetchData_Bloc'

const Headers = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)

    }
    const handleChance = (e) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
        token.set(value)
        setOpen(false)
    }
    return (
        <div className='flex mt-10'>
            <div className='w-[12%]'>
                <button onClick={handleOpen} className='cursor-pointer border p-3 bg-gray-700  text-white'>oAuth token</button>
            </div>
            {
                open &&
                <div className='flex items-center w-full'>
                    <input value={value} onChange={(e) => handleChance(e)} className='px-1 py-3 border outline-none border-cyan-900 w-3/4 ' />
                    <button onClick={handleClick} className='bg-green-500 text-white text-center p-3 border ml-2'>Kaydet</button>
                </div>
            }
        </div>
    )
}

export default Headers