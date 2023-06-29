<script>
import { store } from '../store';
import appfilm from './appfilm.vue';
export default {
    components:{
        appfilm
    },
    data() {
        return {
            store
        }
    },
   
}
</script>
<template lang="">
    <div class="container-image">
        <div class="row">
            <div v-for="(character,index) in store.CharactersList" ::key="character.index"  class="col-6 col-md-2">
               <appfilm :myCharacter="character"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
   .container-image{
    margin-left: 10px;
    margin-right: 15px;
   }


</style>