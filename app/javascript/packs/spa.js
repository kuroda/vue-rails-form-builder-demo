import Vue from "vue/dist/vue.esm"
import VueRemoteTemplate from "vue-remote-template"
import { index } from "../spa/index"
import { newForm } from "../spa/new_form"
import { editForm } from "../spa/edit_form"

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
