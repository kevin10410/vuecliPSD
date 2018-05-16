<template>
  <div id="app">
      <div class="top"></div>
      <div class="container">
        <logo></logo>
        <mainbody></mainbody>
        <bottom-table></bottom-table>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Mainbody from './components/Mainbody.vue'
import BottomTable from './components/BottomTable.vue'
import AppFooter from './components/Footer.vue'
export default {
  name: "app",
  data() {
    return {};
  },
  components:{
    Logo,
    Mainbody,
    BottomTable,
    AppFooter
  }
};
</script>

<style lang="sass">
body 
  background-image: url("./assets/image/bg.jpg")

  #app
    position: relative
    .top 
        background: #1d1d1d
        width: 100%
        height: 75px
  
</style>
