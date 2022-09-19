<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Member">Member</router-link>|
    <router-link to="/Test">Test</router-link>
    <router-link to="/Activity">Activity</router-link>
    <router-link to="/about">About</router-link> |
    <router-link to="/booking">營區預訂</router-link>|
    <router-link to="/Shopping">Shopping</router-link>|
    <router-link to="/report">營火報告</router-link>|
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
