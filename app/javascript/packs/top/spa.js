import Vue from "vue/dist/vue.esm"
import Axios from "axios"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  let templateRenderFns = [];

  new Vue({
    el: "#app",
    data: {
      template: undefined,
      renderer: Vue.compile("<div>Loading...</div>").render
    },
    render: function(h) {
      return this.renderer()
    },
    staticRenderFns: templateRenderFns,
    mounted: function() {
      let self = this
      Axios.get("/api/customers")
        .then(function(response) {
          let compiled = Vue.compile(response.data)
          self.renderer = compiled.render
          templateRenderFns.length = 0
          for (let i in compiled.staticRenderFns) {
          	templateRenderFns.push(compiled.staticRenderFns[i])
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  })
})
