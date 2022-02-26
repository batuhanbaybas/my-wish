import React from 'react'
import { resData } from '../../Bloc/fetchData_Bloc'

const Response = () => {
  const data = resData.use()
  return (
    <div className='py-10'>
      <div>Response</div>
      <div className='mt-5'>
        {data.length > 0 &&
        <div className='bg-zinc-700 text-white p-10'>
          <pre id="json">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
        }
      </div>
    </div>
  )
}

export default Response