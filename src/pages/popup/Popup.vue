<template>
  <section class="popup-wrap">
    <section class="g-btns-box">
      <button @click="typeFn('top')">上部弹窗</button>
      <button @click="typeFn('center')">中部弹窗</button>
      <button @click="typeFn('bottom')">底部弹窗</button>
      <button @click="typeFn('right')">侧边弹窗</button>
    </section>
    <bx-popup
      v-if="async"
      :position="position"
      @closePopupFn="async = false"
    >
      <section class="popup-main">{{position}}</section>
    </bx-popup>
  </section>
</template>

<script>
import BxPopup from '$view/popup/index.vue'
export default {
  components:{
    BxPopup
  },
  data() {
    return {
      arr: [],
      async :false,
      position:''
    };
  },
  methods: {
    typeFn (type){
      this.async = true;
      this.position = type;
      if(type == 'top'){

      }
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped>
.popup-wrap{
  padding-top: 100px;
  .g-btns-box{
    button{
      margin-bottom: 50px;
    }
  }
  .popup-main{
    background: #fff;
  }
}
</style>
