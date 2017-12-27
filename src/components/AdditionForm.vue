<template lang="pug">
  .modal.fade(tabindex="-1" role="dialog" id="additionForm" aria-labelledby="additionForm")
    .modal-dialog.modal-lg(role="document")
      .modal-content
        .modal-header
          h5.modal-title {{$lang.messages.addNewVerb}}
          button.close(
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            v-on:click="resetForm")
            span(aria-hidden="true") &times;
        .modal-body
          form.container(novalidate v-bind:class="{'was-validated': isInvalidForm}" ref='addForm')
            .form-row
              .col-md-4
                input.form-control.mb-2(
                  type="text"
                  v-bind:placeholder="$lang.messages.enterANewVerb"
                  v-model="newVerb"
                  pattern="[a-zñ]*(ar|ir|er)$"
                  required)
                small.form-text.text-danger(v-show="isInvalidConjugation") {{$lang.messages.conjugationFailed}}
              .col-md-7
                button.btn.btn-primary.ml-2.mb-2(type="button" v-on:click="conjugate" v-bind:disabled='isRegular') {{$lang.messages.conjugate}}
                .form-check.form-check-inline
                  label.custom-control.custom-checkbox.ml-2.mb-2
                    input.custom-control-input(type="checkbox" v-model='isRegular')
                    span.custom-control-indicator
                    span.custom-control-description {{$lang.messages.regularVerb}}
            .form-row
              p(v-html="$lang.messages.AdditionFormDescription")
            template(v-if='!isRegular')
              .form-row
                .col
                  h3 {{$lang.messages.indicative}}
              .form-row
                .col
                  table.table.table-sm.table-responsive
                    thead.thead-dark
                      tr
                        th
                        th(v-for="tense in tenses.indicative") {{tense}}
                    tbody
                      tr
                        th yo
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[0]'
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.present[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.preterite[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.imperfect[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.conditional[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.indicative.future[5]'
                          required)
              .form-row
                .col
                  h3 {{$lang.messages.subjuntive}}                
              .form-row
                .col
                  table.table.table-sm.table-responsive
                    thead.thead-dark
                      tr
                        th
                        th(v-for="tense in tenses.subjuntive") {{tense}}
                    tbody
                      tr
                        th yo
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[0]'
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.present[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_1[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.imperfect_2[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.subjuntive.future[5]'
                          required)
              .form-row
                .col
                  h3 {{$lang.messages.subjuntive}}
              .form-row
                .col
                  table.table.table-sm.table-responsive
                    thead.thead-dark
                      tr
                        th
                        th(v-for="tense in tenses.imperative") {{tense}}
                    tbody
                      tr
                        th yo
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[0]'
                          disabled
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.negative[0]'
                          disabled
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.negative[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.negative[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$$"
                          v-model='conjugations.imperative.negative[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.negative[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.affirmative[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='conjugations.imperative.negative[5]'
                          required)
            .form-row
              .alert.alert-danger.d-none(v-bind:class="{'d-block': isInvalidForm}")
                | {{$lang.messages.fillFieldsCorrectly}}
              .alert.alert-success.d-none(v-bind:class="{'d-block': isSaveSuccess}")
                | {{$lang.messages.verbSavedSuccessfully}}
              .alert.alert-danger.d-none(v-bind:class="{'d-block': isPresentInDB}")
                | {{$lang.messages.verbPresentInDB}}
              .alert.alert-error.d-none(v-bind:class="{'d-block': isBadRequest}")
                | {{$lang.messages.badRequest}}
        .modal-footer
          .loader-lg(v-bind:class="{'loader-active-lg': isAwaitResponse}")
          button.btn.btn-primary(type="button" v-on:click='saveVerbToDB') {{$lang.messages.saveToDatabase}}
          button.btn.btn-secondary(type="button" data-dismiss="modal" v-on:click="resetForm") {{$lang.messages.close}}
</template>

<script>
  import conjugateVerb from '../conjugations.js';
  export default {
    name: 'AdditionForm',
    data () {
      return {
        tenses: {
          indicative: ['Present', 'Preterite', 'Imperfect', 'Conditional', 'Future'],
          subjuntive: ['Present', 'Imperfect_1', 'Imperfect_2', 'Future'],
          imperative: ['Affirmative', 'Negative']
        },
        newVerb: '',
        isAwaitResponse: false,
        isRegular: false,
        isInvalidForm: false,
        isInvalidConjugation: false,
        isSaveSuccess: false,
        isPresentInDB: false,
        isBadRequest: false,
        conjugations: {
          indicative: {
            present: new Array(5),
            preterite: new Array(5),
            imperfect: new Array(5),
            conditional: new Array(5),
            future: new Array(5)
          },
          subjuntive: {
            present: new Array(5),
            imperfect_1: new Array(5),
            imperfect_2: new Array(5),
            future: new Array(5)
          },
          imperative: {
            affirmative: ['-','','','','',''],
            negative: ['-','','','','','']
          }
        }
      }
    },
    watch: {
      newVerb: function() {
        if (this.isInvalidConjugation) {
          this.isInvalidConjugation = false;
        }
        if (this.isInvalidForm) {
          this.isInvalidForm = false;
        }
        if (this.isSaveSuccess) {
          this.isSaveSuccess = false;
        }
      },
      conjugations: {
        handler: function() {
          if (this.isInvalidForm) {
            this.isInvalidForm = false;
          }
          if (this.isSaveSuccess) {
            this.isSaveSuccess = false;
          }
        },
        deep: true
      }
    },
    methods: {
      conjugate: function() {
        if (this.newVerb.match(/[a-zñ]*(ar|ir|er)$/i)) {
          var conjugations = conjugateVerb(this.newVerb);

          for (var mood in this.conjugations) {
            for (var tense in this.conjugations[mood]) {
              this.conjugations[mood][tense] = conjugations[mood][tense];
            }          
          }
        } else {
          this.isInvalidConjugation = true;
        }
      },
      saveVerbToDB: function(event) {
        var apiKey = 'RH4Fxw9gAQVd5YMj5FexXxb-N70npUxg',
            url = 'https://api.mlab.com/api/1/databases/spanish_verbs/collections/verbs?apiKey=' + apiKey,
            query = {
              infinitive: this.newVerb
            },
            params = {
              params: {
                q: JSON.stringify(query)
              }
            },
            data = {
              infinitive: this.newVerb,
              regular: this.isRegular,
            };


        if (!this.isRegular) {
          data.conjugations = this.conjugations;
        }

        if (this.$refs.addForm.checkValidity() === false) {
          this.isInvalidForm = true;
          return;
        }

        this.isAwaitResponse = true;
        this.isPresentInDB = false;
        this.isSaveSuccess = false;
        this.isBadRequest = false;

        this.$http.get(url, params)
          .then(
            response => {
              if (response.body.length) {
                this.isPresentInDB = true;
                this.isAwaitResponse = false;
              } else {
                saveVerbInDB();
              }
            },
            response => {
              console.log('Error has ocurred:\n' + response); 
            }
          );


        var saveVerbInDB = () =>  {
          this.$http.post(url, data)
            .then(
              response => {
                this.isSaveSuccess = true;
                this.isAwaitResponse = false;
              },
              response => {
                this.isBadRequest = true;
                console.log('Error has ocurred:\n' + response); 
              }
            );  
        }
      },
      resetForm: function() {
        this.newVerb = '';
        this.isInvalidForm = false;
        this.isRegular = false;
        this.isInvalidConjugation = false;
        this.isBadRequest = false;
        this.isSaveSuccess = false;
        for (var mood in this.conjugations) {
          for (var tense in this.conjugations[mood]) {
            if (tense === 'affirmative' || tense === 'negative') {
            this.conjugations[mood][tense] = ['-','','','','',''];
            continue;
            } 
            this.conjugations[mood][tense] = new Array(5);
          }
        }
      }
    }
  }
</script>

<style lang="sass">
  .loader-lg
    position: relative
    visibility: hidden
    align-self: center
    display: inline-block
    border: 3px solid #ccc
    border-top-color: #aaa
    border-radius: 100%
    width: 18px
    height: 18px
  .loader-active-lg
    visibility: visible
    animation: rotate-loader-lg .5s linear infinite
  @keyframes rotate-loader-lg
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>