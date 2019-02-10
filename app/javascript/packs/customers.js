import Vue from 'vue/dist/vue.esm'
import VueDataScooper from 'vue-data-scooper'

import VueCounter from '../components/counter'

Vue.config.productionTip = false
Vue.use(VueDataScooper)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#customer-form",
    data: {
      open: true
    },
    components: {
      VueCounter
    }
  })
});
