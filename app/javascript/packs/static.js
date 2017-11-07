import Vue from 'vue/dist/vue.esm'
import VueDataScooper from "vue-data-scooper"

Vue.config.productionTip = false
Vue.use(VueDataScooper)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#customer-form",
    data: {
      open: true
    }
  })
});
