import React from 'react'
import ReequestUrl from '../../Components/RequestUrl/RequestUrl'
import Response from '../../Components/Response/Response'
import TabBar from '../../Components/TabBar/TabBar'

const MainPage = () => {

    return (
        <div className='mt-16'>
            <ReequestUrl />
            <TabBar />
            <Response />
        </div>
    )
}

export default MainPage