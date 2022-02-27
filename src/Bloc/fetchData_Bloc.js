import { entity } from "simpler-state"

export const resData = entity([])
export const resError = entity([])
export const body = entity([])
export const token = entity('')

export const fetchData = async (url, method) => {
    console.log(method)
    await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.get()}`

        },
    })
        .then(response => response.json())
        .then(data => resData.set(data))
        .catch(err => resError.set(err))
}

export const sendData = async (url, method) => {
    await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.get()}`

        },
        body: JSON.stringify(body.get())
    })
        .then(response => response.json())
        .then(data => resData.set(data))
        .catch(err => resError.set(err))
 
}