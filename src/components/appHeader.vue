<script>
export default {
    props:{
        title:String
    }
}
</script>
<template lang="">
    <header class="container">
        {{title}}
        <input type="text">
        <input type="button" value="send">
    </header>
</template>
<style lang="scss" scoped>
    
</style>