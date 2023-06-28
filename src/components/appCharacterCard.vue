<script>
import { store } from '../store';
export default {
    props:{
        myCharacter: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div>
      <img :src=store.CharactersList.backdrop_path alt=""> 
    </div>
</template>
<style lang="scss" scoped>
    
</style>