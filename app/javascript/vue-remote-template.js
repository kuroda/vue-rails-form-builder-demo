import Vue from "vue/dist/vue.esm"
import Axios from "axios"
import { getInitialData } from "./vue-data-scooper"

const VueRemoteTemplate = {
  render: function(h) {
    return h(this.dynamicComponent)
  },
  data: function() {
    const root = document.querySelector(this.$options.el)
    return {
      template: undefined,
      path: undefined,
      initialPath: root.dataset.initialPath
    }
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
  },
  computed: {
    dynamicComponent: function() {
      if (this.template) {
        let self = this
        return {
          template: self.template,
          data: function() {
            return Object.assign({}, self.initialData)
          },
          methods: {
            visit: function(templatePath, url) {
              if (!url) url = templatePath
              window.history.pushState({ path: templatePath }, "", url)
              self.path = templatePath
            },
            show: function(templatePath) {
              self.path = templatePath
            }
          }
        }
      }
      else {
        return ""
      }
    },
    initialData: function() {
      const parser = new DOMParser()
      const doc = parser.parseFromString(this.template, "text/html")
      const root = doc.querySelector("body > *")

      return getInitialData(root)
    }
  },
  mounted: function() {
    const self = this

    self.path = self.initialPath

    window.onpopstate = function(event) {
      if (event.state && event.state.path)
        self.path = event.state.path
      else
        self.path = self.initialPath
    }
  }
}

export default VueRemoteTemplate
