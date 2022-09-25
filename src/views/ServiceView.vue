<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner">
        <img src="@/assets/images/main/banner_serve.png" alt="banner">
    </div>
    <ServiceTent/>
    <ServiceFood/>
    <ServiceEquipment/>
    <MainFooter/>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import ServiceTent from '@/components/ServiceTent.vue';
import ServiceFood from '@/components/ServiceFood.vue';
import ServiceEquipment from '@/components/ServiceEquipment.vue';

export default{
    components: {
        MainHeader,
        MainFooter,
        ServiceTent,
        ServiceFood,
        ServiceEquipment
    },
    
}
</script>

<style>

</style>