import React, { useState } from 'react'
import CustomBotton from '../Button/CutomButton'
import Headers from '../Headers/Headers'
import RequestBody from '../RequestBody/RequestBody'

const TabBar = () => {
    const [open, setOpen] = useState("")

    return (
        <div className='mt-10 w-full h-full'>
            <div className='flex'>

                <div>
                    <CustomBotton function={() => setOpen("Headers")}
                        className={`cursor-pointer border p-3 ${open === "Headers" ? "bg-white text-gray-700" : "bg-gray-700  text-white"} `}
                        innerText="Headers" />

                </div>
                <div>
                    <CustomBotton function={() => setOpen("RequestBody")}
                        className={`cursor-pointer border p-3 ${open === "RequestBody" ? "bg-white text-gray-700" : "bg-gray-700  text-white"} `}
                        innerText="Body" />

                </div>
            </div>
            <div>

                {
                    open === "Headers" &&
                    <Headers />
                }
                {
                    open === "RequestBody" &&
                    <RequestBody />
                }

            </div>
        </div>
    )
}

export default TabBar