import { entity } from "simpler-state"

export const resData = entity(null)
export const resError = entity("")
export const body = entity([])
export const token = entity('')
export const isLoading = entity(false)

export const fetchData = async (url, method) => {
    isLoading.set(true)
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.get()}`

        },
    })
    if (res.status === 200 || res.status === 201) {
        const data = await res.json()
        resData.set(data)
        isLoading.set(false)
    } else {
        resData.set([])
        const error = await res.text()
        resError.set(error)
        isLoading.set(false)
    }

}



export const sendData = async (url, method) => {
    try {
        await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.get()}`

            },
            body: body.get()
        })
            .then(response => response.json())
            .then(data => resData.set(data))

    } catch (error) {
        resError.set(error)
        isLoading.set(false)

    }


}