<template>
  <small v-cloak class="label label-rounded label-secondary" :class="style">
    {{ pretty }}
  </small>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    max: {
      type: String,
      default: "250"
    },
    high: {
      type: String,
      default: "230"
    }
  },
  computed: {
    count: function() {
      return this.value ? this.value.length : '0'
    },
    pretty: function() {
      return (this.count > parseInt(this.max)) ? `${this.max}+${(this.count - this.max)}` : this.count
    },
    style: function () {
      return {
        'label-warning': this.count > parseInt(this.high),
        'label-error': this.count > parseInt(this.max)
      }
    }
  }
}
</script>
