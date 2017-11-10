import Immutable from 'immutable';
import { socketEmit } from './common.js';
import {
  INIT_GROUP_LIST,
  ADD_ACTIVE_ITEM,
  UPDATE_ACTIVE_ITEM,
  REMOVE_ACTIVE_ITEM,
  CLEAR_UNREAD,
  SET_ONLINE
} from '../constants/activeList.js'



export const initRoomList = (payload) => (dispatch) => {
  socketEmit('init groups', {_id: payload})
  .then(data => dispatch({
    type: INIT_GROUP_LIST,
    payload: Immutable.fromJS(data.groups)
  })) 
  .catch(err => console.log(err))
}

export const addActiveItem = (payload) => {
  return {
    type: ADD_ACTIVE_ITEM,
    payload: Immutable.fromJS(payload)
  }
}

export const removeActiveItem = (payload) => {
  return {
    type: REMOVE_ACTIVE_ITEM,
    payload: Immutable.fromJS(payload)
  }
}

// nickname, type, lastWord, lastWordTime
export const updateActiveItem = (payload) => {
  return {
    type: UPDATE_ACTIVE_ITEM,
    payload: Immutable.fromJS(payload)
  }
}

// nickname, type
export const clearUnread = (payload) => {
  return {
    type: CLEAR_UNREAD,
    payload: Immutable.fromJS(payload)
  }
}

// _id, nickname
export const setOnline = (payload) => {
  return {
    type: SET_ONLINE,
    payload: Immutable.fromJS(payload)
  }
}
