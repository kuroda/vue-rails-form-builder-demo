import Vue from "vue/dist/vue.esm"
import VueRemoteTemplate from "vue-remote-template"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  const newForm = {}
  const editForm = {}

  new Vue({
    mixins: [ VueRemoteTemplate ],
    el: "#app",
    data: {
      templatePath: "/api/customers",
      handlerName: "index",
      handlers: {
        index: {},
        newForm: newForm,
        editForm: editForm
      }
    }
  })
})
