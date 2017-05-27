import Vue from "vue/dist/vue.esm"
import { getInitialData } from "vue-data-scooper"
import Axios from "axios"
import get from "lodash.get"
import has from "lodash.has"
import set from "lodash.set"

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
          template: self.template,
          data: function() {
            let obj = Object.assign({}, self.initialData)
            obj.path = undefined
            obj.open = false
            return obj
          },
          watch: {
            path: function(val, _oldVal) {
              self.path = val
            }
          }
        }
      },
      initialData: function() {
        let parser = new DOMParser()
        let doc = parser.parseFromString(this.template, "text/html")
        return getInitialData(doc)
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
