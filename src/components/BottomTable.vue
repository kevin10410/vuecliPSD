<template>
    <div class="bottomTable row">
        <div class="box col-lg-3 col-md-6">
            <h6>LATEST TWEETS</h6>
            <p>loading tweets...</p>
        </div>
        <div class="box col-lg-3 col-md-6">
            <h6>TESTIMONIALS</h6>
            <div class="talk">
                " Sed dapibus molestie interdum. Fusce nec est ante, sit amet lacinia lorem. Maecenas nec eros ut mauris pulvinar suscipit. Aliquam erat "
            </div>
            <div class="talker">
                <img src="../static/image/men.jpg">
                <div>
                    <p>Stephen Bingham</p>
					<p class="link">demolink.org</p>
                </div>
            </div>
        </div>
        <div class="box col-lg-3 col-md-6">
            <h6>GET IN TOUCH!</h6>
            <input type="name" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea placeholder="Message"></textarea>
            <div class="msgBtns">
                <button class="clear">CLEAR FORM</button>
                <button class="send">SEND!</button>
            </div>
        </div>
        <div class="box col-lg-3 col-md-6">
            <h6>FLICKR</h6>
            <div class="flickr">
                <div>
                    <img src="../static/image/f1.jpg">
                </div>
                <div>
                    <img src="../static/image/f2.jpg">
                </div>
                <div>
                    <img src="../static/image/f3.jpg">
                </div>
                <div>
                    <img src="../static/image/f4.jpg">
                </div>
                <div>
                    <img src="../static/image/f5.jpg">
                </div>
                <div>
                    <img src="../static/image/f6.jpg">
                </div>
                <div>
                    <img src="../static/image/f7.jpg">
                </div>
                <div>
                    <img src="../static/image/f8.jpg">
                </div>
                <div>
                    <img src="../static/image/f9.jpg">
                </div>
                <div>
                    <img src="../static/image/f10.jpg">
                </div>
                <div>
                    <img src="../static/image/f11.jpg">
                </div>
                <div>
                    <img src="../static/image/f12.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    .bottomTable
        background: url(../static/image/subbg.gif)
        margin-top: 50px
        padding: 25px 15px
        border: 1px solid #9c9c9c

        .box
            h6
                margin: 0
                padding: 10px 0

            p
                font-size: 0.8rem
                margin: 0

            .talk
                padding: 10px 
                font-size: 0.8rem
                background: #cdcdcd
                position: relative

            .talk::after
                content: ""
                position: absolute
                bottom: -15px
                left: 0
                border-top: 15px solid #cdcdcd
                border-right: 30px solid transparent

            .talker
                margin-top: 30px   
                display: flex

                div
                    padding-left: 10px

                    .link
                        color: #80b600
                        font-style: italic


            input, textarea
                margin-bottom: 20px
                width: 100%
                border: 1px solid #cdcdcd
                border-radius: 5px
                outline: none
                background: #f5f5f5
                padding-left: 10px

            .msgBtns
                display: flex
                justify-content: space-between

                .clear 
                    background: #000
                    color: #fff
                    outline: none
                    border: none
                
                .send  
                    background: #80b600
                    outline: none
                    border: none
            
            .flickr
                width: 100%
                display: flex
                flex-wrap: wrap
                div
                    width: 25%
                    padding: 2.5px
                    img
                        width: 100%
</style>

