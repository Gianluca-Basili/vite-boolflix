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
    <div class="my-5">
        <div class="container-img">
            <img :src="store.apiBaseMovie+myCharacter.poster_path" alt=""> 

        </div>
      
    </div>
</template>
<style lang="scss" scoped>


 
</style>