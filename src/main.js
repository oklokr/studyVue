import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.Kakao.init('5f94de0ef1121ec472fb5a576be5c399');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
