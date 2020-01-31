<template>
  <section class="home-wrap">
    <ul>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li class="g-border">
        <router-link to="/popup">Popup</router-link>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      arr: []
    };
  },
  methods: {

  },
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped>
.home-wrap{
  ul{
    li{
      height: 50px;
      padding-left: 15px;
      background-color: #fff;
      a{
        display: block;
        height: 100%;
        line-height: 50px;
      }
    }
  }
}
</style>
