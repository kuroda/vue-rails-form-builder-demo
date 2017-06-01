import Vue from "vue/dist/vue.esm"
import VueRemoteTemplate from "vue-remote-template"
import { index } from "../../extensions/index"
import { newForm } from "../../extensions/new_form"
import { editForm } from "../../extensions/edit_form"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    mixins: [ VueRemoteTemplate ],
    el: "#app",
    data: {
      templatePath: "/api/customers",
      extensions: {
        index: index,
        newForm: newForm,
        editForm: editForm
      }
    }
  })
})
