import { createStore } from 'vuex'
import user from './user'


export default function(){
  const store = createStore({
    modules:{
      user
    }
  })
  return store
}