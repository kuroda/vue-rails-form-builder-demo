import Vue from "vue/dist/vue.esm"
import Axios from "axios"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      template: "<div>Loading...</div>",
      path: undefined
    },
    render: function(h) {
      return h(this.dynamicComponent)
    },
    computed: {
      dynamicComponent: function() {
        let self = this
        return {
          template: this.template,
          data: function() {
            return {
              path: undefined,
              open: false,
              customer: {
                name: "",
                plan: undefined,
                confirmed: undefined,
                approved: undefined,
                remarks: ""
              }
            }
          },
          watch: {
            path: function(val, _oldVal) {
              self.path = val
            }
          }
        }
      }
    },
    mounted: function() {
      this.path = "/api/customers"
    },
    watch: {
      path: function(val, _oldVal) {
        let self = this
        Axios.get(val)
          .then(function(response) {
            self.template = response.data
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  })
})
