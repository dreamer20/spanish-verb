<template lang="pug">
  form.container
    .form-row
      .col-1
        .loader(v-bind:class="{'loader-active': awaitResponse}")
      .col-11
        .input-group
          .search-wrapper
            input.form-control(
              type="text"
              v-bind:placeholder="$lang.messages.enterASpanishVerb"
              ref="searchInput"
              v-model="searchString"
              v-on:blur="hideSuggestions"
              v-on:keydown.enter.prevent="conjugate")
            search-suggestions(
              v-show="suggestionsVisible"
              v-bind:suggestions="suggestions"
              v-on:selected="selectSuggestionItem")
          span.input-group-btn
            button.btn.btn-info.conjugate-btn(
              type="button"
              v-on:click="conjugate"
              v-html="$lang.messages.conjugate_animate") 
    .form-row
      .col-md-11.offset-md-1
        small.form-text.text-danger(v-if="!isConjugated") {{$lang.messages.conjugationFailed}}
</template>

<script>
  import debounce from 'lodash.debounce';
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  import SearchSuggestions from './SearchSuggestions.vue';

  Vue.use(VueResource);

  export default {
    name: 'SearchControl',
    data () {
      return {
        searchString: '',
        selectedVerb: {},
        suggestionsVisible: false,
        suggestions: [],
        awaitResponse: false,
        isConjugated: true
      }
    },
    watch: {
      searchString: debounce(
          function() {
            if (this.isConjugated === false) {
              this.isConjugated = true;
            }

            if (this.searchString.length < 3 || this.searchString === this.selectedVerb.infinitive) {
              this.suggestionsVisible = false;
              return;
            }
            this.awaitResponse = true;
            this.getSuggestions();
          }, 200
        )
    },
    methods: {
      selectSuggestionItem: function(index) {
        this.searchString = this.suggestions[index].infinitive;
        this.selectedVerb = {
          infinitive: this.suggestions[index].infinitive,
          regular: this.suggestions[index].regular
        };
        this.suggestionsVisible = false;
      },
      getSuggestions: function() {
        var apiKey = 'RH4Fxw9gAQVd5YMj5FexXxb-N70npUxg',
            url = 'https://api.mlab.com/api/1/databases/spanish_verbs/collections/verbs?apiKey=' + apiKey,
            query = {
              infinitive: {
                $regex: '^' + this.searchString.toLowerCase()
              }
            },
            params = {
              params: {
                q: JSON.stringify(query),
                l: 5
              }
            }
        this.$http.get(url, params)
          .then(
            response => {
              if (response.body) {
                this.suggestions = response.body;
                this.suggestionsVisible = true;
                this.awaitResponse = false;
              }
            },
            response => {
              console.log('Error has ocurred:\n' + response); 
            }
          );
      },
      hideSuggestions: function() {
        this.suggestionsVisible = false;
      },
      conjugate: function() {
        var searchString = this.searchString.toLowerCase();
        if (searchString.match(/[a-zñ]*(ar|ir|er)$/)) {
          this.$emit('conjugate', searchString);
        } else {
          this.isConjugated = false;
        }
      }
    },
    components: {
      SearchSuggestions
    }
  }
</script>

<style lang="sass">
  .search-wrapper
    display: flex
    position: relative
  .loader
    position: relative
    visibility: hidden
    top: 50%
    transform: translateY(-50%)
    border: 3px solid #ccc
    border-top-color: #aaa
    border-radius: 100%
    width: 14px
    height: 14px
  .loader-active
    visibility: visible
    animation: rotate-loader .5s linear infinite
  .search-control-alert
    position: absolute
    top: 100%
  .conjugate-btn:hover .incline-animate
    transform: rotate(20deg)
  .incline-animate
    display: inline-block
    transition: all .2s linear
    transform-origin: 0 100%

  
  @keyframes rotate-loader 
    0%
      transform: translateY(-50%) rotate(0)
    100%
      transform: translateY(-50%) rotate(360deg)

</style>