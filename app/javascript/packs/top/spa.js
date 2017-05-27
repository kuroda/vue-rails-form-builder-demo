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
      initialData: {},
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

            let parser = new DOMParser()
            let doc = parser.parseFromString(self.template, "text/html")
            self.initialData = getInitialData(doc)
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  })
})
