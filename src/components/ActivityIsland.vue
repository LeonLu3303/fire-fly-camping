<template>
  <section class="wrap_activityIsland">
    <div class="title_main">
        <h2>營區主題</h2>
    </div>
    <div class="activityIsland_group">
    </div>
    <a class="btn_page_link" href="#">了解更多</a>
  </section>
</template>

<script>
export default {
  name: "ActivityIsland",
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
.wrap_activityIsland{
    width: 100%;
    height: 1000px;
    background:url(../assets/images/home_snow_all.png) $color-main-yellow ;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding: 150px 0;
}

</style>