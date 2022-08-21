const saveUser = ({commit}) =>{
  setTimeout(() => {
    commit('SETUSER')
  }, 1000);
}
export {
  saveUser
}