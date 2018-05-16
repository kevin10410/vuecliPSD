<template>
        <div class="row">
            <div class="leftTable col-lg-4 col-md-12">
                <h2>WELCOME</h2>
                <img src="../../static/image/welcome.jpg">
                <p>Curabitue velit nisl, porttitor viverra molestie quis, lacinia eget purus. Suspendisse ipsum massa, rutrum in hendrerit malesuada, fermentum id erat...<span><a href="#" class="mo">More</a></span></p>
            </div>
            <div class="midTable col-lg-4 col-md-12">
                <h2>WHY CHOOSE US?</h2>
                <div class="cir">
                    <div class="anr">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-angle-right fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="text">	
                        <p>Etiam rutrum venenatis dui, non</p>
                    </div>	
                </div>
                <div class="cir">
                    <div class="anr">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-angle-right fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="text">	
                        <p>Aliquam ac diam in lorem vulputate auctor.</p>
                    </div>	
                </div>
                <div class="cir">
                    <div class="anr">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-angle-right fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="text">
                    <p>Vestibulum vitage urna quis eros convallis</p>
                    </div>
                </div>
                <div class="cir">
                    <div class="anr">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-angle-right fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="text">	
                        <p>Sed magna magna, congue</p>
                    </div>
                </div>	
            </div>
            <div class="rightTable col-lg-4 col-md-12">
                <h2>NEWS & EVENTS</h2>
                <div class="news row">
                    <div class="neti col-lg-6 col-md-4 col-4">
                        <img src="../../static/image/news1.jpg">
                    </div>
                    <div class="nettext col-lg-6 col-md-8 col-8">
                        <span class="day">12.12.12</span>
                        <p class="te">Aliquam ac diam in lorem vulputate auctor. Aliquam rhoncus nunc et justo imperdiet blandit..<span><a href="#">More</a></span></p>
                    </div>
                </div>
                <div class="news row">
                    <div class="nebi col-lg-6 col-md-4 col-4">
                        <img src="../../static/image/news2.jpg">		
                    </div>
                    <div class="nebtext col-lg-6 col-md-8 col-8">
                        <span class="day">12.12.12</span>
                        <p class="te">Sed auctor laoreet augue, id pulvinar lacus mattis non. In hac habitasse platea dictumst. Proin et lorem...<span><a href="#">More</a></span></p>									
                    </div>
                </div>		
            </div>
        </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.row 
    p 
        margin: 0
    
    .leftTable
        margin: 10px 0

        img
            max-width: 100%

    .midTable
        margin: 10px 0

        .cir
            display: flex
            align-items: center
            padding: 10px 0  

            .anr
                line-height: 1

            .text 
                padding-left: 10px   

    .rightTable
        margin: 10px 0   

        img 
            max-width: 100%  

        .news
            padding: 10px 0            
</style>

