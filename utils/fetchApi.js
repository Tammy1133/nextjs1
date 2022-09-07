import axios from "axios"



export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
const {data} = await axios.get((url), {
    headers: {
        'x-rapidapi-key': '6b97b871d3msh8c596a87698b40fp1886c6jsnc472af157076',
        'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
} )

return data;
}