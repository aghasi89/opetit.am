import axios from "axios";
const api=axios.create({
    baseURL:'http://game.annaniks.com/'
})

export default api