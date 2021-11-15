import axsios from "axsios"
const api=axsios.create({
    baseURL:"http://localhost:8000/"
})

export default api