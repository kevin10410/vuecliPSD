<template>
    <div class="bodyInfo col-12">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
                <h4>GROWTH STRATEGIES</h4>
                <img class="cardimg" src="../../static/image/p1.png">
                <p>Vestibulim dignissim, dui ac hendrerit blandit, sapien orci dictum nibh, vel suscipit augue bibh in enim. Nullam dignissim euisodnunc at</p>
                <div class="cardbtnBox">
                    <button class="cardbtn">More</button>
                </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <h4>PERFECT SUPPORT</h4>
                    <img class="cardimg" src="../../static/image/p2.png">
                    <p>Donec semper, dolor eu iaculis laoreet, erat diam interdum nisi, vel consequat leo neque in ante. Curabitur fringilla tristique nisl ut</p>
                    <div class="cardbtnBox">
                        <button class="cardbtn">More</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <h4>PARTNERS PROGRAMS</h4>
                    <img class="cardimg" src="../../static/image/p3.png">
                    <p>Nunc pellentesque malesuada enim utdignissim. Etiam aliquam malesuada magna, vel scelerisque lectus pharetra quis.</p>
                    <div class="cardbtnBox">
                        <button class="cardbtn">More</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <h4>PREMIUM SERVICES</h4>
                    <img class="cardimg" src="../../static/image/p4.png">
                    <p>Duis molestie commodo sapien, non mollis diam consequat in. Nulla blandit viverra sodales. Donec sit amet diam neque</p>
                    <div class="cardbtnBox">
                        <button class="cardbtn">More</button>
                    </div>
                </div>
            </div>
        </div>
        <info-table></info-table>
        <feature></feature>
    </div>
</template>

<script>
import InfoTable from './InfoTable.vue'
import Feature from './Feature.vue'
export default {
    components:{
        InfoTable,
        Feature,
    }
}
</script>

<style lang="sass" scoped>
.bodyInfo
    background: url(../../static/image/subbg.gif)
    padding-bottom: 50px
    border: 1px solid #9c9c9c

    .row

        .card
            background: #e7e7e7
            height: 100%
            text-align: center
            border-radius: 0
            padding: 20px 40px
            position: relative
            display: flex
            flex-direction: column
            justify-content: space-between
            margin-top: -15px

            h4
                font-size: 1rem    

            img
                display: inline-block
                margin: 15px auto
                width: 50px
                height: 50px

            p
                font-size: 0.8rem   

            .cardbtnBox
                margin-top: 20px
                bottom: 0
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                left: 0

                button 
                    background: #cdcdcd
                    border: 0
                    font-size: 10px
                    padding: 4px 4px
                    outline: none

        .card:hover
            background: rgba(0, 0, 0, 0.7)
            color: #fff
            transition-duration: 0.3s        
</style>

