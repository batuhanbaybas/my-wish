import React, { useState } from 'react'
import Headers from '../Headers/Headers'
import RequestBody from '../RequestBody/RequestBody'

const TabBar = () => {
    const [open, setOpen] = useState("")

    return (
        <div className='mt-10 w-full h-full'>
            <div className='flex'>

                <div>
                    <button onClick={() => setOpen("Headers")}
                        className={`cursor-pointer border p-3 ${open === "Headers" ? "bg-white text-gray-700" : "bg-gray-700  text-white"} `}>
                        Headers
                    </button>
                </div>
                <div>
                    <button onClick={() => setOpen("RequestBody")}
                        className={`cursor-pointer border p-3 ${open === "RequestBody" ? "bg-white text-gray-700" : "bg-gray-700  text-white"} `}>
                        Body
                    </button>
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