import bxPagination from './index.vue';
bxPagination.install = Vue => Vue.component(bxPagination.name, bxPagination);//.name就是开始说的vue文件暴露出来的name名，bxPagination整个组件
export default bxPagination;