import services from '../../../store/services'
import * as types from './mutation-types'


export const setMedications = ({commit},payload) => { 
  return services.medications.medicationsList({id:payload.page, lp:payload.limit}).then(res =>{
    commit(types.set_medications,res.data)
    console.log(res.data.data)
  })
}

export const setMedicationsSearch = ({commit},payload) => { 
  return services.medications.medicationsListSearch({id:payload.page, lp:payload.limit, xd:payload.search}).then(res =>{
    commit(types.set_medications,res.data)
    console.log(res.data.data)
  })
}


// username: bluestorm-api
// password: apipassword123