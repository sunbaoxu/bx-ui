<template>
  <section 
    class="bx-popup-wrap" 
    v-if="moveAsync"
    :class="{
      'g-cen-cen-box': position=='center',
      'g-cen-end': position == 'bottom',
      'right-box': position =='right',
      'top-box':position =='top',
      'g-cen-end-close':closeAsync
    }"
    :style="'background:rgba(0,0,0,'+backCorder+')'"
    @click.stop.self="backCloseFn"
    @touchmove.prevent 
    >
    <main class="bx-popup-main" :style="width?{'max-width':width+'px'}:''">
      <slot></slot>
    </main>
  </section>
  <section 
    v-else
    class="bx-popup-wrap" 
    :class="{
      'g-cen-cen-box': position=='center',
      'g-cen-end': position == 'bottom',
      'right-box': position =='right',
      'g-cen-end-close':closeAsync
    }"
    :style="'background:rgba(0,0,0,'+backCorder+')'"
    @click.stop.self="backCloseFn"
    >
    <main class="bx-popup-main" :style="width?{'max-width':width+'px'}:''">
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  name:"bxPopup",
  props :{
    closeOnClickModal :{
      type :Boolean,
      default : false
    },
    moveAsync :{
      type :Boolean,
      default : true
    },
    position :{
      type :String,
      default : 'center'
    },
    width :{
      type :String,
      default : ''
    },
    clickWrapAsync :{
      type:Boolean,
      default : true
    },
    backCorder : {
      type:Number,
      default:0.6
    }
  },
  data (){
    return {
      closeAsync: false
    }
  },
  methods : {
    close () {
      this.closeAsync = true;
      setTimeout(()=>{
        this.$emit('closePopupFn')
      },500)
    },
    backCloseFn () {
      if(!this.clickWrapAsync){return false};
      if(this.position =='center'){
        this.$emit('closePopupFn')
      } else{
        this.close()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bx-popup-wrap{
  position: fixed;
  left  :0;
  right :0;
  bottom:0;
  top   :0;
  z-index   :1000;
  &.right-box{
    display: flex;
    justify-content: flex-end;
    .bx-popup-main{
      animation: fadeRight .5s;
    }
  }
  &.g-cen-end{
    .bx-popup-main{
      animation: fadeDown .5s;
    }
  }
  &.top-box{
    .bx-popup-main{
      animation: fadeUp .5s;
    }
  }


  &.g-cen-end-close.g-cen-end{
    .bx-popup-main{
      animation: fadeDownClose .5s!important;
    }
  }
  &.g-cen-end-close.top-box{
    .bx-popup-main{
      animation: fadeUpClose .5s!important;
    }
  }
  &.g-cen-end-close.right-box{
    .bx-popup-main{
      animation: fadeRightClose .5s!important;
    }
  }


  .bx-popup-main{
    flex:1;
    display: flex;
    justify-content: center;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translate3d(0,-100%,0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeUpClose {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeDownClose {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translate3d(100%,0,0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeRightClose {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}


</style>
