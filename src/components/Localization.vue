<template lang="pug">
  .btn-group
    button.btn.btn-light.dropdown-toggle(
    type="button"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false") {{$lang.messages.language}}
    .dropdown-menu
      a.dropdown-item(href="#" v-on:click.prevent="changeLang('en')") 
        img(v-bind:src="flags.en" width="16" height="16")
        |  English
      a.dropdown-item(href="#" v-on:click.prevent="changeLang('ru')") 
        img(v-bind:src="flags.ru" width="16" height="16")
        |  Русский
</template>

<script>
 import ru_flag  from '../assets/ru.svg';
 import en_flag  from '../assets/gb.svg';

  export default {
    name: 'localization',
    data () {
      return {
        flags: {
          ru: ru_flag,
          en: en_flag
        }
      }
    },
    methods: {
      changeLang: function(lang) {
        this.$lang.setLang(lang);
      }
    }
  }
</script>

<style lang="sass">
  .flag
    width: 10px
    height: 10px
</style>