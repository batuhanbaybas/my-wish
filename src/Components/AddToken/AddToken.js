import React, { useState } from 'react'

const AddToken = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)

    }
    return (
        <div className='mt-10 flex'>
            <div className='w-[12%]'>
                <button onClick={handleOpen} className='cursor-pointer border p-3 bg-gray-700  text-white'>oAuth token</button>
            </div>
            {
                open &&
                <div className='flex items-center w-full'>
                    <input className='px-1 py-3 border outline-none border-cyan-900 w-3/4 ' />
                    <button className='bg-green-500 text-white text-center p-3 border ml-2'>Kaydet</button>
                </div>
            }
        </div>
    )
}

export default AddToken