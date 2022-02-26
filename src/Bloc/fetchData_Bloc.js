import { entity } from "simpler-state"

export const resData = entity([])
export const resError = entity([])

export const fetchData = async (url, method) => {
    console.log(url)
    await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => resData.set(data))
        .catch(err => resError.set(err))
}