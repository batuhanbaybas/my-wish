import React from 'react'
import AddToken from '../../Components/AddToken/AddToken'
import RequestBody from '../../Components/RequestBody/RequestBody'
import ReequestUrl from '../../Components/RequestUrl/RequestUrl'
import Response from '../../Components/Response/Response'

const MainPage = () => {

    return (
        <div className='mt-48'>
            <ReequestUrl />
            <AddToken />
            <RequestBody />
            <Response />
        </div>
    )
}

export default MainPage