import {headerToken} from '../../../http/index'

export const setHeader = token => headerToken(token)


//handle local storage token functions get,set and delete
export const setTokenST = token => localStorage.setItem('token', token)

export const getTokenST = () => localStorage.getItem('token')

export const deleteTokenST = () => localStorage.removeItem('token')
