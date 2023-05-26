import axios from 'axios'

export const baseUrl = 'https://bayut.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.X_R1PID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
}
