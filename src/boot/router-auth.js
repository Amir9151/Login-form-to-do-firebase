import {LocalStorage } from 'quasar'

export default  ({router} ) => {
  router.beforeEach((to,from,next) => {
    let logedIn=LocalStorage.getItem("logedIn")
    if(!logedIn && to.path!=="/auth"){
      next('/auth')
    }
    else{
      next()
    }
   // console.log("to",to)
    //console.log("from",from)
    //console.log("next",next())
  })
}
