<template>
    <div class="row justify-content-between">
        <div class="logo col-md-5 col-sm-12">
            <img src="../static/image/logo.png">
        </div>
        <div class="info col-md-5 col-sm-12">
            <div class="icons">
                <a href="#"><i class="fab fa-facebook-square fa-2x"></i></a>
                <a href="#"><i class="fab fa-tumblr-square fa-2x"></i></a>
                <a href="#"><i class="fas fa-dice-two fa-2x"></i></a>
                <a href="#"><i class="fas fa-basketball-ball fa-2x" data-fa-transform="shrink-2"></i></a>
                <a href="#"><i class="fas fa-wifi fa-2x" data-fa-transform="shrink-5"></i></a>
            </div>
            <p>Call Us Now:+1 (777) 784-25-43</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.row 
    margin-top: -20px
    background: #ffffff
    padding: 5px 0

    .logo 
        padding: 10px
        
        img 
            object-fit: contain
            width: 100%
    

    .info 
        padding: 10px

    .icons 
        display: flex
        justify-content: flex-end

        a 
            padding: 0 2.5px
            text-decoration: none
            color: black
            overflow: hidden
            display: inline-block
            width: 40px

        a:hover 
            color: #80b600
    p 
        margin: 0
        text-align: right
</style>
