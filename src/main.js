import Vue from 'vue';
import Lang from 'vuejs-localization';
import App from './App.vue';
// import conjugateVerb from './conjugations.js';

Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);

new Vue({
  el: '#app',
  render: h => h(App)
})
