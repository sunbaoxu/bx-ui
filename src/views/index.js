import bxAlert from './alert/index.js';
import bxPopup from './popup/index.js';
const components = [
  bxAlert,
  bxPopup
]
const install = (Vue, opts = {}) =>{
	components.forEach(component => {
    console.log(component,'aaaaaaaa')
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