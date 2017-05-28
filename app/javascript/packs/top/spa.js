import Vue from "vue/dist/vue.esm"
import VueRemoteTemplate from "vue-remote-template"

Vue.config.productionTip = false
let Comp = Vue.extend({ mixins: [ VueRemoteTemplate ] })

document.addEventListener("DOMContentLoaded", () => {
  const newForm = {}
  const editForm = {}

  new Comp({
    el: "#app",
    data: {
      initialHandlerName: "index",
      handlers: {
        index: {},
        newForm: newForm,
        editForm: editForm
      }
    }
  })
})
