import React from 'react'
import { resData } from '../../Bloc/fetchData_Bloc'

const Response = () => {
  const data = resData.use()
  return (
    <div className='mt-10'>
      <div>Response</div>
      <div className='mt-5'>
      {data.length > 0 &&JSON.stringify(data)}

      </div>
      </div>
  )
}

export default Response