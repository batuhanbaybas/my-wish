import React from 'react'
import AddToken from '../../Components/AddToken/AddToken'
import RequestInput from '../../Components/RequestInput/RequestInput'
import Response from '../../Components/Response/Response'

const MainPage = () => {

    return (
        <div className='mt-48'>
            <RequestInput />
            <AddToken />
            <Response />
        </div>
    )
}

export default MainPage