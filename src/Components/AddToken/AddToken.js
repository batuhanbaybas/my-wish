import React, { useState } from 'react'

const AddToken = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)

    }
    return (
        <div className='mt-10 flex'>
            <div>
                <button onClick={handleOpen} className='cursor-pointer border p-3 bg-gray-700  text-white'>oAuth token</button>
            </div>
            {
                open &&
                <div className='px-5 flex flex-col  items-center'>
                    <textarea rows={8} className='px-1 border outline-none border-cyan-900 ' />
                    <button className='bg-green-500 text-white text-center p-3 border mt-3  '>Kaydet</button>
                </div>
            }
        </div>
    )
}

export default AddToken