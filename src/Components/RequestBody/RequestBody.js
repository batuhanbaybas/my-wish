import React, { useState } from 'react'
import { body } from '../../Bloc/fetchData_Bloc'
import CustomBotton from '../Button/CustomButton'


const RequestBody = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
        body.set(value)

    }
    return (
        <div className='mt-10'>
            <CustomBotton function={handleOpen} className="p-3 cursor-pointer" innerText="Body Ekle" />
            {
                open &&
                <textarea value={value} onChange={(e) => handleChange(e)} rows={8} className='p-3 border outline-none border-cyan-900 w-full mt-5 ' />
            }
        </div>
    )
}

export default RequestBody