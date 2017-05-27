import Vue from 'vue/dist/vue.esm'

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      msg: "Hello",
      template: undefined
    },
    render: function(h) {
      if (this.template)
        return this.template()
      else
        return h("div", "Loading...")
    },
    mounted: function() {
      this.template = Vue.compile('<div><span>{{ msg }}</span></div>').render
    }
  })
})
