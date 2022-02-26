import React from 'react'
import { resData } from '../../Bloc/fetchData_Bloc'

const Response = () => {
  const data = resData.use()
  return (
    <div className='mt-10'>{JSON.stringify(data)}</div>
  )
}

export default Response