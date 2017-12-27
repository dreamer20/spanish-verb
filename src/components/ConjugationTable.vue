<template lang="pug">
  table.table.table-sm.table-hover.table-responsive-sm
    thead.thead-dark
      tr
        th
        th.capitalize(v-for="(tense, key, index) in conjugations") {{key}}
    tbody
      tr(v-for="(pronoun, index) in pronouns")
        th {{pronoun}}
        td(v-for="conjugation in conjugations" v-if="conjugation") {{conjugation[index]}}
</template>

<script>
  export default {
    props: ['conjugations'],
    data () {
      return {
        pronouns: ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas']
      }
    },
  }
</script>

<style lang="sass">
  .capitalize
    text-transform: capitalize
</style>