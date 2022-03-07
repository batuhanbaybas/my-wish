import React, { useState } from 'react'
import { isLoading, resData, resError } from '../../Bloc/fetchData_Bloc'

const Response = () => {
  const data = resData.use()
  const loading = isLoading.use()
  const error = resError.use()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <div className='py-10'>

      <div className='cursor-pointer' onClick={handleOpen}>{`${loading ? "Loading..." : "Response"}`}</div>
      {
        open &&
        <div className='mt-5'>
          {
            loading ? <div>Loading...</div> :
              (
                <div className='bg-zinc-700 text-white p-10'>
                  <pre id="json">
                    {data && JSON.stringify(data, null, 2)}
                    {error && <div className='text-red-600'>Bir şeyler ters gitti!! hatayı konsoldan inceleyebilirsiniz!!!</div>}
                  </pre>
                </div>
              )
          }
        </div>
      }
    </div>
  )
}

export default Response