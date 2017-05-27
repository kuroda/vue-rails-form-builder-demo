import Axios from "axios"
import { getInitialData } from "vue-data-scooper"

const VueRemoteTemplate = {
  render: function(h) {
    return h(this.dynamicComponent)
  },
  data: function() {
    return {
      template: undefined,
      path: undefined
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
      else {
        return ""
      }
    },
    initialData: function() {
      let parser = new DOMParser()
      let doc = parser.parseFromString(this.template, "text/html")
      return getInitialData(doc)
    }
  }
}

export default VueRemoteTemplate
