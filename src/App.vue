<script>
import appHeader from './components/appHeader.vue';
import appCharacterList from './components/appCharacterList.vue';
import { store } from './store';
import axios from 'axios'

export default {
  components:{
    appHeader,
    appCharacterList
  },
  data() {
        return {
          store,
          
        }
    },
    mounted(){
        axios.get(store.apiUrl).then((response) =>{
            store.CharactersList = response.data.results;
        })
    }
}
</script>
<template lang="">
  <div>
    <appHeader title="BOOLFIX" />
    <appCharacterList />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>