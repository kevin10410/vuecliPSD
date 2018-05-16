import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookSquare'
import faTumblrSquare from '@fortawesome/fontawesome-free-brands/faTumblrSquare'
import faDiceTwo from '@fortawesome/fontawesome-free-solid/faDiceTwo'
import faBasketballBall from '@fortawesome/fontawesome-free-solid/faBasketballBall'
import faWifi from '@fortawesome/fontawesome-free-solid/faWifi'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
fontawesome.library.add(faTumblrSquare)
fontawesome.library.add(faFacebook)
fontawesome.library.add(faDiceTwo)
fontawesome.library.add(faBasketballBall)
fontawesome.library.add(faWifi)
fontawesome.library.add(faCircle)
fontawesome.library.add(faAngleRight)
fontawesome.library.add(faAngleLeft)

new Vue({
  el: '#app',
  render: h => h(App)
})
