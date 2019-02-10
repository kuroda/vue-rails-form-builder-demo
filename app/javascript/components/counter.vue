<template>
  <small v-cloak class="label label-rounded label-secondary" :class="style">
    {{ value | count }}
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
  filters: {
    count: function (value) {
      if (!value) return '0'
      value = value.toString()
      return value.length
    }
  },
  computed: {
    style: function () {
      return {
        'label-warning': this.value.length > parseInt(this.warning),
        'label-error': this.value.length > parseInt(this.max)
      }
    }
  }
}
</script>
