import services from '../../../store/services'
import * as types from './mutation-types'


export const getManufacturers = ({commit}) => { 
  return services.create.getManufacturers().then(res =>{
    commit(types.set_manufacturers,res.data.data)
  })
}

export const newMed = ({commit},payload) => { 
  return services.create.create(payload).then(res =>{
    commit(types.set_newMed,res.data.data)
    console.log(res.status)
  })
}

// username: bluestorm-api
// password: apipassword123