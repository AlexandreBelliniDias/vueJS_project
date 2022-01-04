import * as types from './mutation-types'

export default {
    [types.set_medications](state,payload){
        state.medications = payload
    }
}