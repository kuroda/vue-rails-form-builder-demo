import Vue from 'vue/dist/vue.esm'

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    template: "<div>Loading...</div>",
    data: {
    }
  })
})
