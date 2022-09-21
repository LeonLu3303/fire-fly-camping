<template>

<MainHeader></MainHeader>
<HomeNews></HomeNews>
<MainFooter></MainFooter>

</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import HomeNews from '../components/HomeNews.vue'
import MainFooter from '../components/MainFooter.vue'


export default{
  components:{
    MainHeader,
    MainFooter,
    HomeNews,
  }
}
</script>
