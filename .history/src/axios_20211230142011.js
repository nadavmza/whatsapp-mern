import axios from 'axios'

const instance =axios.create({
    baseUrl:'http://localhost'
})

export default instance
