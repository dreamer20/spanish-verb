<template lang="pug">
  #app.container
    .row.mt-3
      .col-md-12
        localization.float-right.clearfix
    .row.mt-3
      .col-md-12
        h1.text-center {{$lang.messages.header}}
    .row.mt-3.justify-content-center
      .col-md-4
        search-control(
        v-on:conjugate="getConjugation")
    .row.mt-3
      .col-md-12
        h2.text-center {{$lang.messages.or}}
    .row.mt-3.justify-content-center
      .col-md-4.d-flex.justify-content-center
        button.btn.btn-success(
          type="button"
          data-target="#additionForm"
          data-toggle="modal"
          data-backdrop="static") {{$lang.messages.addNewVerb}}
    template(v-if="awaitResponse")
      .row.mt-3
        .col-md-12.d-flex.justify-content-center
          .main-loader
    template(v-if="verb.infinitive")
      .row.mt-3
        .col-md-12.bg-dark
          h2.text-white {{$lang.messages.verb}}
      .row.mt-3
        .col-md-12
          h2: em {{verb.infinitive}}
      .row.mt-3
        .col-md-12.bg-dark
          h2.text-white {{$lang.messages.conjugations}}
      .row.mt-3
        .col-md-12
          h2: strong {{$lang.messages.indicative}}
      .row.justify-content-center.mt-3
        .col-md-10
          conjugation-table(v-bind:conjugations="verb.conjugations.indicative")
      .row.mt-3
        .col-md-12
          h2: strong {{$lang.messages.subjuntive}}
      .row.justify-content-center.mt-3
        .col-md-10
          conjugation-table(v-bind:conjugations="verb.conjugations.subjuntive")
      .row.mt-3
        .col-md-12
          h2: strong {{$lang.messages.imperative}}
      .row.justify-content-center.mt-3
        .col-md-10
          conjugation-table(v-bind:conjugations="verb.conjugations.imperative")
      .row.mb-3
        .col-md-12
          button.btn.btn-secondary.float-right.clearfix(
            type="button"
            data-target="#editForm"
            data-toggle="modal"
            data-backdrop="static"
            v-on:click="editVerb") {{$lang.messages.edit}}
    edit-form(v-if="verb.id" v-bind:isEdit="isEdit" v-bind:verb="verb" v-on:cancelEdit="cancelEdit")
    addition-form

</template>

<script>
  import SearchControl from './components/SearchControl.vue';
  import ConjugationTable from './components/ConjugationTable.vue';
  import AdditionForm from './components/AdditionForm.vue';
  import Localization from './components/Localization.vue';
  import EditForm from './components/EditForm.vue';
  import VueResource from 'vue-resource';
  import conjugateVerb from './conjugations.js';
  export default {
    name: 'app',
    data () {
      return {
        isEdit: false,
        awaitResponse: false,
        verb: {
          infinitive: null,
          conjugations: null,
          id: null
        }
      }
    },
    methods: {
      getConjugation: function(verb) {
        var apiKey = 'RH4Fxw9gAQVd5YMj5FexXxb-N70npUxg',
            url = 'https://api.mlab.com/api/1/databases/spanish_verbs/collections/verbs?apiKey=' + apiKey,
            query = {
              infinitive: verb
            },
            params = {
              params: {
                q: JSON.stringify(query)
              }
            }
        this.awaitResponse = true;
        this.$http.get(url, params)
          .then(
            response => {
              this.awaitResponse = false;
              if (response.body) {
                window.d = response.body[0];
                var verb = response.body[0];
                this.verb.infinitive = verb.infinitive;
                this.verb.id = verb._id;
                this.verb.isRegular = verb.regular;
                if (verb.regular) {
                    this.verb.conjugations = conjugateVerb(verb.infinitive);
                } else {
                  this.verb.conjugations = verb.conjugations;
                }
              }
            },
            response => {
              this.awaitResponse = false;
              console.log('Error has ocurred:\n' + response); 
            }
          );
      },
      changeLang: function() {
        this.$lang.setLang('ru');
      },
      editVerb: function() {
        this.isEdit = true;
      },
      cancelEdit: function() {
        this.isEdit = false;
      }
    },
    components: {
      SearchControl,
      ConjugationTable,
      AdditionForm,
      Localization,
      EditForm
    }
  }
</script>

<style lang="sass">
.mt-3
  margin-top: 20px
.main-loader
  border: 4px solid #ccc
  border-top-color: #aaa
  border-radius: 100%
  width: 50px
  height: 50px
  animation: rotate-main-loader 1s linear infinite
@keyframes rotate-main-loader 
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

</style>
