<script>
import appHeader from './components/appHeader.vue';
import appmain from './components/appmain.vue';
import appSearchBar from './components/appSearchBar.vue';
import { store } from './store';
import axios from 'axios'

export default {
  components:{
    appHeader,
    appmain,
    appSearchBar
  },
  data() {
        return {
          store,
          
        }
    },
    mounted(){
        this.searchMovies()
    },
    methods:{
      searchMovies(){
        let myUrl = store.apiUrl;
       
        if(store.searchText !==''){
          store.apiBaseMovie
        }
        axios.get(myUrl).then((response) =>{
            store.CharactersList = response.data.results;
        })
      
      }
    }
}
</script>
<template lang="">
  <div>
    <appHeader title="BOOLFIX"/>
    <appSearchBar @search="searchMovies" />
    <appmain />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>

      
