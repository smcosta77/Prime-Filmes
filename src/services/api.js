import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=d8e6b47ddd3d610ac5b910d99f65d09f&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;
