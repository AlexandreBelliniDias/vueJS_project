import * as types from './mutation-types'

export default {
    [types.set_newMed](state,payload){
        state.newMedications = payload
    },
    [types.set_manufacturers](state,payload){
        state.manufacturers = payload
    }

}