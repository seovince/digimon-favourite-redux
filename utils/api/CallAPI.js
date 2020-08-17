const DIGIMON_URL = 'https://digimon-api.vercel.app/api/digimon'

const callAllDigimonData = async () => {
    let respData = null
    return fetch(DIGIMON_URL)
    .then((resp) => resp.json())
    .then((respJSON) => {
        return respData = {
            success: true,
            data: respJSON
        }
    })
    .catch((err) => {
        return respData = {
            success: false,
            error: err
        }
    })
}

export default {callAllDigimonData}