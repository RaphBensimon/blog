import Vue from 'vue'
import icon from './icon'
const components = { icon }
Object.entries(components).forEach(([name, component]) => {
	console.log(name)
	Vue.component(name, component)
})