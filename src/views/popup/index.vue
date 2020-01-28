<template>
  <section 
    class="lb-popup-wrap" 
    v-if="moveAsync"
    :class="{
      'g-cen-cen-box': position=='center',
      'g-cen-end': position == 'bottom',
      'right-box': position =='right',
      'g-cen-end-close':animationAsync
    }"
    :style="'background:rgba(0,0,0,'+backCorder+')'"
    @click.stop.self="backCloseFn"
    @touchmove.prevent 
    >
    <main v-if="width" class="lb-popup-main" :style="{'max-width':width+'px'}">
      <slot></slot>
    </main>
    <main v-else class="lb-popup-main">
      <slot></slot>
    </main>
  </section>
  <section 
    v-else
    class="lb-popup-wrap" 
    :class="{
      'g-cen-cen-box': position=='center',
      'g-cen-end': position == 'bottom',
      'right-box': position =='right',
      'g-cen-end-close':animationAsync
    }"
    :style="'background:rgba(0,0,0,'+backCorder+')'"
    @click.stop.self="backCloseFn"
    >
    <main v-if="width" class="lb-popup-main" :style="{'max-width':width+'px'}">
      <slot></slot>
    </main>
    <main v-else class="lb-popup-main">
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
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
      animationAsync: false
    }
  },
  methods : {
    close () {
      this.animationAsync=true;
      setTimeout(()=>{
        this.$emit('closePopupFn')
      },500)
    },
    backCloseFn () {
      if(!this.clickWrapAsync){return false};
      if(this.position == 'bottom' || this.position == 'right'){
        this.close()
      } else{
        this.$emit('closePopupFn')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.lb-popup-wrap{
  position: fixed;
  left  :0;
  right :0;
  bottom:0;
  top   :0;
  z-index   :1000;
  &.right-box{
    display: flex;
    justify-content: flex-end;
    .lb-popup-main{
      animation: lbfadeInLeft .5s;
    }
    
  }
  .lb-popup-main{
    flex:1;
    display: flex;
    justify-content: center;
  }
  &.g-cen-end{
    .lb-popup-main{
      animation: lbfadeInUp .5s;
    }
  }
  &.g-cen-end-close.g-cen-end{
    .lb-popup-main{
      animation: fadeOutDown .5s!important;
    }
  }
  &.g-cen-end-close.right-box{
    .lb-popup-main{
      animation: lbfadeOutRight .5s!important;
    }
  }
}

@keyframes lbfadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes lbfadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes lbfadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(100%,0,0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes lbfadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}


</style>
