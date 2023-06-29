<script>
import appSearchBar from './appSearchBar.vue';
export default {
    components:{
        appSearchBar
    },
    props:{
        title:String
    },
   
   
}
</script>
<template lang="">
    <header class="container-full my-2 d-flex justify-content-between">
        {{title}}
        
    </header>
   

        
</template>
<style lang="scss" scoped>
 
</style>