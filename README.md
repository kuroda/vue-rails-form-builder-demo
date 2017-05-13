# vue-rails-form-builder-demo

This is a Rails demo application using these libraries:

* [vue-rails-form-builder](https://github.com/kuroda/vue-rails-form-builder) -
  A custom Rails form builder for Vue.js
* [vue-data-scooper](https://github.com/kuroda/vue-data-scooper) -
  A Vue.js plugin to initialize the Vue instance data from form elements

This application illustrates how we can combine the _traditional_ form builder
with Vue.js components.

Look at carefully these files:

* `Gemfile`
* `package.json`
* `app/views/customers/edit.html.erb`
* `app/views/customers/new.html.erb`
* `app/views/customers/_fields.html.erb`
* `app/javascript/packs/customers/fields.js`

Especially, note that we use `vue_form_for` helper in stead of `form_for`:

```erb
<%= vue_form_for @customer, html: { id: "customer-form" } do |f| %>
  <%= render "fields", f: f %>
  <div>
    <%= f.submit "Update" %>
  </div>
<% end %>
```

Also observe how we _use_ the `vue-data-scooper` plugin:

```javascript
import Vue from 'vue/dist/vue.esm'
import VueDataScooper from "vue-data-scooper"

Vue.use(VueDataScooper)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#customer-form"
  })
})
```

## Installation

```bash
git clone https://github.com/kuroda/vue-rails-form-builder-demo.git
cd vue-rails-form-builder-demo
bundle
yarn
bin/rake db:setup
```

## Running in development mode

In one terminal:

```bash
bin/webpack-dev-server
```

In another terminal:

```bash
rails s
```
