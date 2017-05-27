import Vue from 'vue/dist/vue.esm'

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      msg: "Hello",
      template: Vue.compile("<div>Loading...</div>").render
    },
    render: function(h) {
      return this.template()
    },
    mounted: function() {
      this.template = Vue.compile('<div><span>{{ msg }}</span></div>').render
    }
  })
})
