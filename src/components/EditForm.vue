<template lang="pug">
  .modal.fade(tabindex="-1" role="dialog" id="editForm" aria-labelledby="editForm")
    .modal-dialog.modal-lg(role="document")
      .modal-content
        .modal-header
          h5.modal-title {{$lang.messages.editing}}
          button.close(
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            v-on:click="cancel")
            span(aria-hidden="true") &times;
        .modal-body
          form.container(novalidate v-bind:class="{'was-validated': isInvalidForm}" ref='editForm')
            .form-row
              .col-md-4
                input.form-control.mb-2(
                  type="text"
                  v-bind:placeholder="$lang.messages.enterANewVerb"
                  v-model="editedVerb.infinitive"
                  pattern="[a-zñ]*(ar|ir|er)$"
                  required)
                small.form-text.text-danger(v-show="isInvalidConjugation") {{$lang.messages.conjugationFailed}}
            template(v-if='verb.isRegular === false')
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
                          v-model='editedVerb.conjugations.indicative.present[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[0]'
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.present[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.present[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.present[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.present[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.present[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.preterite[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.imperfect[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.conditional[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.indicative.future[5]'
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
                          v-model='editedVerb.conjugations.subjuntive.present[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[0]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[0]'
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.present[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.present[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.present[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.present[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.present[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_1[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.imperfect_2[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.subjuntive.future[5]'
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
                          v-model='editedVerb.conjugations.imperative.affirmative[0]'
                          disabled
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.negative[0]'
                          disabled
                          required)
                      tr
                        th tú
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.affirmative[1]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.negative[1]'
                          required)
                      tr
                        th él/ella
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.affirmative[2]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.negative[2]'
                          required)
                      tr
                        th nosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.affirmative[3]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$$"
                          v-model='editedVerb.conjugations.imperative.negative[3]'
                          required)
                      tr
                        th vosotros
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.affirmative[4]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.negative[4]'
                          required)
                      tr
                        th ellos/ellas
                        td: input.form-control.form-control-sm(
                          pattern="[a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.affirmative[5]'
                          required)
                        td: input.form-control.form-control-sm(
                          pattern="no [a-z|ñóáéíú]{2,}$"
                          v-model='editedVerb.conjugations.imperative.negative[5]'
                          required)
            .form-row
              .alert.alert-danger.d-none(v-bind:class="{'d-block': isInvalidForm}")
                | {{$lang.messages.fillFieldsCorrectly}}
              .alert.alert-success.d-none(v-bind:class="{'d-block': isDeletionSuccess}")
                | {{$lang.messages.verbDeletedSuccessfully}}
              .alert.alert-success.d-none(v-bind:class="{'d-block': isSaveSuccess}")
                | {{$lang.messages.verbSavedSuccessfully}}
              .alert.alert-error.d-none(v-bind:class="{'d-block': isBadRequest}")
                | {{$lang.messages.badRequest}}
        .modal-footer
          button.btn.btn-danger(v-on:click="deleteVerb" v-bind:disabled="isDeleteBtnDisabled") {{$lang.messages.delete}}
          .loader-delete-lg(v-bind:class="{'loader-active-lg': isAwaitDeletion}")
          .loader-lg.ml-auto(v-bind:class="{'loader-active-lg': isAwaitResponse}")
          button.btn.btn-primary(type="button" v-on:click='update' v-bind:disabled="isUpdateBtnDisabled") {{$lang.messages.update}}
          button.btn.btn-secondary(type="button" data-dismiss="modal" v-on:click="cancel") {{$lang.messages.cancel}}
</template>

<script>
  import cloneDeep from 'lodash.clonedeep';
  export default {
    name: 'EditForm',
    props: {
      verb: Object,
      isEdit: false
    },
    data () {
      return {
        tenses: {
          indicative: ['Present', 'Preterite', 'Imperfect', 'Conditional', 'Future'],
          subjuntive: ['Present', 'Imperfect_1', 'Imperfect_2', 'Future'],
          imperative: ['Affirmative', 'Negative']
        },
        editedVerb: cloneDeep(this.verb),
        isAwaitResponse: false,
        isAwaitDeletion: false,
        isInvalidForm: false,
        isInvalidConjugation: false,
        isSaveSuccess: false,
        isDeletionSuccess: false,
        isUpdateBtnDisabled: false,
        isDeleteBtnDisabled: false,
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
      verb: {
        handler: function() {
        this.isUpdateBtnDisabled = false;
        this.isUpdateBtnDisabled = false;
        this.isDeleteBtnDisabled = false;
        },
        deep: true
      },
      editedVerb: function() {
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
      isEdit: function() {
        this.editedVerb = cloneDeep(this.verb);
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
      update: function(event) {
        var apiKey = 'RH4Fxw9gAQVd5YMj5FexXxb-N70npUxg',
            url = 'https://api.mlab.com/api/1/databases/spanish_verbs/collections/verbs/' 
                  + this.editedVerb.id.$oid +'?apiKey=' + apiKey,
            data = {
              $set: {
                verb: this.editedVerb.infinitive
              }
            };

        if (!this.verb.isRegular) {
          data.$set.conjugations = this.editedVerb.conjugations;
        }
        if (this.$refs.editForm.checkValidity() === false) {
          this.isInvalidForm = true;
          return;
        }

        this.isUpdateBtnDisabled = true;
        this.isDeleteBtnDisabled = true;
        this.isAwaitResponse = true;
        this.isBadRequest = false;
        this.isSaveSuccess = false;

        this.$http.put(url, data)
          .then(
            response => {
              this.isSaveSuccess = true;
              this.isAwaitResponse = false;
              this.isUpdateBtnDisabled = false;
              this.isDeleteBtnDisabled = false;
            },
            response => {
              this.isBadRequest = true;
              console.log('Error has ocurred:\n');
              console.log(response) 
            }
          );
      },
      cancel: function() {
        this.$emit('cancelEdit');
        if (this.isDeletionSuccess) this.isDeletionSuccess = false;
        this.isBadRequest = false;
        this.isAwaitResponse = false;
        this.isSaveSuccess = false;
      },
      deleteVerb: function() {
        var apiKey = 'RH4Fxw9gAQVd5YMj5FexXxb-N70npUxg',
            url = 'https://api.mlab.com/api/1/databases/spanish_verbs/collections/verbs/' 
                  + this.verb.id.$oid +'?apiKey=' + apiKey;

        if (this.isDeletionSuccess) this.isDeletionSuccess = false;
        if (this.isSaveSuccess) this.isSaveSuccess = false;

        this.isUpdateBtnDisabled = true;
        this.isDeleteBtnDisabled = true;
        this.isAwaitDeletion = true;
        this.isBadRequest = false;

        this.$http.delete(url)
          .then(
            response => {
              this.isDeletionSuccess = true;
              this.isAwaitDeletion = false;
            },
            response => {
              this.isBadRequest = true;
              console.log('Error has ocurred:\n');
              console.log(response);
            }
          );
      }
    }
  }
</script>

<style lang="sass">
  .loader-delete-lg
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