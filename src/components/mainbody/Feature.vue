<template>
    <div class="row">
        <div class="title col-12">
            <h2>FEATURED WORKS</h2>
            <p><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></p>
        </div>
        <div class="col-md-3 col-6">
            <img src="../../assets/image/g1.jpg">
        </div>
        <div class="col-md-3 col-6">
            <img src="../../assets/image/g2.jpg">
        </div>
        <div class="col-md-3 col-6">
            <img src="../../assets/image/g3.jpg">
        </div>
        <div class="col-md-3 col-6">
            <img src="../../assets/image/g4.jpg">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.row
    .title
        display: flex
        justify-content: space-between

        p
            color: #cdcdcd

    img 
        width: 100%        
</style>

