<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    methods:{
       
    }
}
</script>
<template lang="">
    <div>
        <input type="text" v-model="store.searchText" class="me-2 my-2" placeholder="search film" @keyup.enter="$emit('search')">
        <button class="btn btn-sm btn-primary" @click="$emit('search')">search</button>
    </div>
</template>
<style lang="scss">
    
</style>