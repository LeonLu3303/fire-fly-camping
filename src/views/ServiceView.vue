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
import ServiceTent from '../components/ServiceTent.vue';
import ServiceFood from '@/components/ServiceFood.vue';
import ServiceEquipment from '@/components/ServiceEquipment.vue';

export default{
    components: {
        ServiceTent,
        ServiceFood,
        ServiceEquipment
    },
    
}
</script>

<style>

</style>