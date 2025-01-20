import axios from "axios"

export const getImageURL = async (imageData) => {
    const formData = new FormData()
    formData.append('image', imageData)

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData)
    // console.log(data.data.display_url)
    return data.data.display_url
}