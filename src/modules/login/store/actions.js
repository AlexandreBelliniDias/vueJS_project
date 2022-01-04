import * as types from './mutation-types'
import * as storage from './storage'
import services from '../../../store/services'

export const ActionDoLogin = ({dispatch},payload) => { 
  return services.login.login(payload).then(res =>{
    dispatch('setToken', res.data.token)
    dispatch('setUser', payload)
  })
}

export const setUser = ({commit},payload) => {
commit(types.set_user,payload)
}

export const setToken = ({commit},payload) => {
storage.setTokenST(payload)
storage.setHeader(payload)
commit(types.set_token,payload)
}



// username: bluestorm-api
// password: apipassword123