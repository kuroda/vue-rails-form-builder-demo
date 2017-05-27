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
      return h(this.dynamicComponent)
    },
    computed: {
      dynamicComponent: function() {
        return {
          template: this.template,
          data: function() { return {} }
        }
      }
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
