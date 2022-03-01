import { entity } from "simpler-state"

export const resData = entity([])
export const resError = entity([])
export const body = entity([])
export const token = entity('')
export const isLoading = entity(false)

export const fetchData = async (url, method) => {
    try {
        isLoading.set(true)
        await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.get()}`

            },
        })
            .then(response => response.json())
            .then(data => {
                resData.set(data);
                isLoading.set(false)
            }
            )
    } catch (error) {
        resError.set(error)
    }


}

export const sendData = async (url, method) => {
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
        .catch(err => resError.set(err))

}