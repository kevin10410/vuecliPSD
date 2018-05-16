<template>
    <div class="mainBody row">
        <navbar></navbar>
        <carousel-box></carousel-box>
        <body-info></body-info>
    </div>
</template>

<script>
import Navbar from './mainbody/Navbar.vue'
import CarouselBox from './mainbody/CarouselBox.vue'
import BodyInfo from './mainbody/BodyInfo.vue'

export default {
    components:{
        Navbar,
        CarouselBox,
        BodyInfo,
    }
};
</script>

<style>
</style>
