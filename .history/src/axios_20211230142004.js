import axios from 'axios'

const instance =axios.create({
    baseUrl:'http'
})

export default instance
