<template>
<MainHeader/>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/main_logo_row.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
<MainFooter/>  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainHeader,
    MainFooter
}
}
</script>
