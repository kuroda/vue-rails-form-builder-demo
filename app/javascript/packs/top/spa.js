import Vue from "vue/dist/vue.esm"
import Axios from "axios"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      template: "<div>Loading...</div>"
    },
    render: function(h) {
      return h({ template: this.template, data: {} })
    },
    mounted: function() {
      let self = this
      Axios.get("/api/customers")
        .then(function(response) {
          self.template = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  })
})
