import Vue from 'vue'
import App from './App.vue'

/**
 * 引入ant-design
 * ref: https://www.antdv.com/docs/vue/introduce-cn/
 */
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
