import axios from 'axios'

const instance =axios.create({
    baseU:'http://localhost:9000',
})

export default instance
