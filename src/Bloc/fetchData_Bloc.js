import axios from "axios"
import { entity } from "simpler-state"

export const resData = entity(null)
export const resError = entity(false)
export const body = entity(null)
export const token = entity('')
export const isLoading = entity(false)

export const fetchData = async (url, method) => {
    isLoading.set(true)
    try {
        const response = await axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.get()}`
            },

        })
        resData.set(response.data)
        isLoading.set(false)
    } catch (error) {
        resError.set(error.response.data)
        isLoading.set(false)
    }

}



export const sendData = async (url, method) => {
    isLoading.set(true)
    console.log(typeof body.get(), body.get())
    try {
        const response = await axios({
            method: method,
            url: url,
            data: body.get(),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.get()}`
            },

        })
        resData.set(response.data)
        isLoading.set(false)
    }
    catch (error) {
        resError.set(true)
        isLoading.set(false)
    }




}