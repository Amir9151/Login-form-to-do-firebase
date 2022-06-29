import {Dialog} from 'quasar'


export function showErrorMessage(Errormessage){
  // Loading.hide()
  Dialog.create({
    title:"Error",
    message:Errormessage
   })
}
