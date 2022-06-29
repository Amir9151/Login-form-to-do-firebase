import {firebaseAuth} from "boot/firebase"
import {LocalStorage,Loading} from "quasar"
import {showErrorMessage} from "src/functions/function-error-message"

const state={
logedIn:false

}
const getters={


  }


const mutations={
setlogedIn(state,value) {state.logedIn=value},
}
const actions={
  registerUser({},payload){
    console.log("registerUser(action):",payload)
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email,payload.pass).
    then((res)=>console.log("res",res))
    .catch(function(error) {
  // Handle Errors here.
 console.log("error",error.message)
})
  },
  loginUser({},payload){
    console.log("LoginUser(action):",payload)
     Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email,payload.pass).
    then((res)=>console.log("res (Login):",res))
    .catch(function(error) {
   // Handle Errors here.
  // alert("You don't register")
    Loading.hide()
  showErrorMessage(error.message)
})
  },


  handleAuthStatechange({commit,dispatch}){
   // console.log(" handleAuthStatechange")
    firebaseAuth.onAuthStateChanged((user)=> {
      console.log("i have been doing")
       Loading.hide()
      if (user) {
        // User is signed in.
        // alert("user loged in")
        commit("setlogedIn",true)
        LocalStorage.set("logedIn",true)
        this.$router.push('/').catch(err => {})
        dispatch('tasks/fbReadData',null,{root:true})
      }
      else{
        commit("tasks/clearTask",null,{root:true})
        commit("setlogedIn",false)
        LocalStorage.set("logedIn",false)
        this.$router.replace('/auth').catch(err => {})
        // alert("user loged out")
      }
    })
  },



  logoutUser(){
    console.log("logout button has fired")
    firebaseAuth.signOut( )
  }

}
export default {
  namespaced:true,
  getters,
  mutations,
  actions,
  state
}
