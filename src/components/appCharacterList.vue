<script>
import { store } from '../store';
import appCharacterCard from './appCharacterCard.vue'
export default {
    components:{
        appCharacterCard
    },
    data() {
        return {
            store
        }
    },
   
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div v-for="(character,index) in store.CharactersList" ::key="character.index"  class="col-6 col-md-4">
               <appCharacterCard :myCharacter="character"/>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>