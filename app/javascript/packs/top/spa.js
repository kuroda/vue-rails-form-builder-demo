import Vue from "vue/dist/vue.esm"
import Axios from "axios"
import get from "lodash.get"
import has from "lodash.has"
import set from "lodash.set"

Vue.config.productionTip = false

let scoop = function(doc, el, obj) {
  let type = el.getAttribute("type")
  let path = el.getAttribute("v-model")

  if (el.tagName === "INPUT" && type === "radio") {
    if (el.checked) {
      set(obj, path, el.value)
    }
    else if (!has(obj, path)) {
      set(obj, path, undefined)
    }
  }
  else if (el.tagName === "INPUT" && type === "checkbox") {
    let checkboxesWithSameName = doc.querySelectorAll(
      `input[type='checkbox'][v-model='${path}']`)
    if (checkboxesWithSameName.length > 1) {
      if (!has(obj, path)) set(obj, path, [])

      if (el.checked) {
        let values = get(obj, path)
        values.push(el.value)
        set(obj, path, values)
      }
    }
    else {
      set(obj, path, el.checked)
    }
  }
  else if (el.tagName === "SELECT" && el.multiple) {
    let values = []
    for (let j = 0; j < el.selectedOptions.length; j++) {
      values.push(el.selectedOptions[j].value)
    }
    set(obj, path, values)
  }
  else {
    set(obj, path, el.value)
  }
}

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
            let inputs = doc.querySelectorAll("[v-model]")
            let obj = {}
            for (let i = 0; i < inputs.length; i++) {
              scoop(doc, inputs[i], obj)
            }
            self.initialData = obj
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  })
})
