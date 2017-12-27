<template lang="pug">
  .list-group.suggestions(v-on:mousedown.prevent="")
    a.list-group-item.list-group-item-action.suggestions-item(
      href="#"
      v-on:click.prevent="select(index)"
      v-for="(item, index) in suggestions"
      v-bind:key="index"
    ) {{item.infinitive}}
</template>

<script>
  export default {
    name: 'SearchSuggestions',
    props: {
      suggestions: Array
    },
    methods: {
      select: function(index) {
        this.$emit('selected', index);
      }
    }
  }
</script>

<style lang="sass">
.suggestions
  position: absolute
  z-index: 999
  top: 100%
  width: 100%
</style>