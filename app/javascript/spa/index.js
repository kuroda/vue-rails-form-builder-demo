import Axios from "axios"
Axios.defaults.headers["X-CSRF-TOKEN"] =
  document.querySelector("meta[name='csrf-token']").getAttribute("content")

export const index = {
  methods: {
    destroy: function(customer) {
      const self = this
      Axios.delete(`/api/customers/${customer.id}`)
        .then(function(response) {
          self.customers = response.data.data.customers
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
