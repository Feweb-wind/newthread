<template>
  <header-com></header-com>
  <router-view/>
  <FooterCom/>
</template>
<script setup>
  import HeaderCom from '@/components/HeaderCom.vue';
  import FooterCom from '@/components/FooterCom.vue';
</script>
<style>
@import url(./assets/css/public.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
body,p,ul,ol,dl,dt,dd,h1,h2,h3,h4 {
margin: 0;
padding: 0;
}
ul,ol,li{
    list-style: none;
}
a {
    text-decoration: none;
    cursor:pointer;
    color: #000000;
}
</style>
