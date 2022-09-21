<template>

<MainHeader></MainHeader>
<ActivityIsland/>
<!-- <MainFooter></MainFooter> -->

</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'
import ActivityIsland from "@/components/ActivityIsland.vue";


export default{
  components:{
    MainHeader,
    MainFooter,
    ActivityIsland
  }
}
</script>
