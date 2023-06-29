import { reactive } from "vue";

export const store = reactive({
    apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=a8711f8dca2a6acf1d69ce0906f9c697&query=t',
    apiBaseMovie:'https://image.tmdb.org/t/p/w300',
    searchText:'',
    CharactersList:[]
   
})