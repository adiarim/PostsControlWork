import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://2ae61cde2e21f8bf.mokky.dev',
    headers: {
        'Content-Type': 'application/json'
    }
})
