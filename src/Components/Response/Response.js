import React, { useState } from 'react'
import { resData } from '../../Bloc/fetchData_Bloc'

const Response = () => {
  const data = resData.use()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <div className='py-10'>
      <div className='cursor-pointer' onClick={handleOpen}>Response</div>
      
      {
        open &&
        <div className='mt-5'>
          {data &&
            <div className='bg-zinc-700 text-white p-10'>
              <pre id="json">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          }
        </div>

      }
    </div>
  )
}

export default Response