import Vue from "vue/dist/vue.esm"
import { getInitialData } from "vue-data-scooper"
import Axios from "axios"
import VueRemoteTemplate from "../../vue-remote-template"

Vue.config.productionTip = false
let Comp = Vue.extend({ mixins: [VueRemoteTemplate] })

document.addEventListener("DOMContentLoaded", () => {
  new Comp({
    el: "#app",
    mounted: function() {
      this.path = "/api/customers"
    }
  })
})
