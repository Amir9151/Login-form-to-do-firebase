import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './module-example/store-tasks.js'
import settings from './module-example/store-setting.js'
import auth from './module-example/store-auth.js'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,settings,auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}