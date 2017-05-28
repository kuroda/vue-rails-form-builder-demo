import Vue from "vue/dist/vue.esm"
import VueRemoteTemplate from "vue-remote-template"

Vue.config.productionTip = false
let Comp = Vue.extend({ mixins: [ VueRemoteTemplate ] })

document.addEventListener("DOMContentLoaded", () => {
  const newForm = {
    methods: {
      submit: function(event) {
        console.log("new form!")
      }
    }
  }

  const editForm = {
    methods: {
      submit: function(event) {
        console.log("edit form!")
      }
    }
  }

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
