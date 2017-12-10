import Immutable from 'immutable';
import {
  GROUP_FORM_SHOW,
  SET_LOADING,
  SELECT_LEFT_PANEL,
  TOGGLE_LEFT_PANEL,
  SELECT_RIGHT_PANEL,
  TOGGLE_RIGHT_PANEL,
  TOGGLE_USER_INFO,
  RESTORE_INIT,
  SHOW_ALERT,
  HIDDEN_ALERT,
} from '../constants/pageUI.js'

const init = Immutable.fromJS({
  layout: {
    groupFormShow: false,
    isLoading: false,
    leftPanelIs: '',
    showLeftPanel: false,
    rightPanelIs: '',
    showRightPanel: false,
    showUserInfo: false,
  },
  showAlert: false,
  alertContent: '',
  userInfoIs: {
    avatar: '',
    nickname: '',
    sex: '',    
    createAt: '',
    place: ''
  }
});

const pageUI = (state = init, action) => {
  switch( action.type ){
    case GROUP_FORM_SHOW: {
      return state.setIn(['layout', 'groupFormShow'], action.payload);
    }
    case SET_LOADING: {
      return state.set('isLoading', action.payload);
    }
    case SELECT_LEFT_PANEL: {
      state = state.setIn(['layout', 'leftPanelIs'], action.payload);
      return state.setIn(['layout', 'showLeftPanel'], true);
    }
    case TOGGLE_LEFT_PANEL: {
      return state.getIn(['layout','showLeftPanel']) 
        ? state.setIn(['layout', 'showLeftPanel'], false) 
        : state.setIn(['layout', 'showLeftPanel'], true)
    }
    case SELECT_RIGHT_PANEL: {
      state = state.setIn(['layout', 'rightPanelIs'], action.payload);
      return state.setIn(['layout', 'showRightPanel'], true);
    }
    case TOGGLE_RIGHT_PANEL: {
      return state.getIn(['layout', 'showRightPanel']) 
        ? state.setIn(['layout', 'showRightPanel'], false) 
        : state.setIn(['layout', 'showRightPanel'], true)
    }
    case TOGGLE_USER_INFO: {
      return state.getIn(['layout','showUserInfo']) 
        ? state.setIn(['layout', 'showUserInfo'], false) 
        : state.setIn(['layout', 'showUserInfo'], true)
    }
    case RESTORE_INIT: {
      return state.set('layout', init.get('layout'));
    }
    case SHOW_ALERT: {
      return state.merge({ showAlert: true, alertContent: action.payload });
    }
    case HIDDEN_ALERT: {
      return state.set('showAlert', false);
    }
    default: {
      return state;
    }
  }
}

export default pageUI;