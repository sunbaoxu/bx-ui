import bxAlert from './alert/index.js';
import bxPopup from './popup/index.js';
// require('@/assets/css/reset.scss');
// require('@/assets/css/common.scss');
const components = [
  bxAlert,
  bxPopup
]
const install = (Vue, opts = {}) =>{
	components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
 
export default {
	install,
  bxAlert,
  bxPopup
}