import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router.js'
import Vuex from 'vuex'
import store from './vuex/store.js'
Vue.use(Vuex)
Vue.use(ElementUI)


new Vue({
	
	router,
	store,
	el: '#app',
	router,
	render: h => h(App)
	
})