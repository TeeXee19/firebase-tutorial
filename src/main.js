import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import { auth } from './firebaseDb'
import store from './store'
import custom from './custom'

Vue.use(custom)

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
	store.dispatch("fetchUser", user)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
