import React, { useState } from 'react'

const RequestBody = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }
    return (
        <div className='mt-10'>
            <div className='text-xl cursor-pointer ' onClick={handleOpen}> Body Ekle </div>
            {
                open &&
                <textarea rows={8} className='p-3 border outline-none border-cyan-900 w-full mt-5 ' />
            }
        </div>
    )
}

export default RequestBody