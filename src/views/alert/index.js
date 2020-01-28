import ldcPagination from './index.vue';
ldcPagination.install = Vue => Vue.component(ldcPagination.name, ldcPagination);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default ldcPagination;