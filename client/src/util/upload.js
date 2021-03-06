import axios from 'axios';
import {
  dispatchAction, 
  socketEmit
} from '../redux/actions/common';
import { initRoomList } from '../redux/actions/activeList.js';
import { showAlert } from '../redux/actions/pageUI.js';
import { setUser } from '../redux/actions/user';
import config from '../config/serverConfig';

axios.defaults.baseURL = `http://${config.server.HOST}:${config.server.PORT}`;

function formData (data) {
  let formdata = new FormData();
  Object.keys(data).forEach(key => {
    if(typeof data[key] !== 'null' && typeof data[key] !== 'undefined')
      console.log(data[key])
      formdata.append(key, data[key]);
  })
  return formdata;
}

export const uploadFile = (file) => {
    let formdata = new FormData();
    formdata.append('file',file);
    return axios.post('/upload/file', formdata, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
}

export const fileInfo = (file) => {
    let k = 1024.00;
    let size = file.size;
    if(size < k){
      size = size.toFixed(2) + 'B';
    }
    else if(size < k * k){
      size = (size / k).toFixed(2) + 'KB';
    }
    else if(size < 3 * Math.pow(k, 2)){
      size = (size / Math.pow(k, 2)).toFixed(2) + 'MB';
    }
    else if(size > 3 * Math.pow(k, 2)){
      return false;
    };
    return {fileName: file.name, size};
}

export const createGroup = (info) => {
  let formdata = formData(info);
  return axios.post('/api/createGroup', formdata, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
  .then(res => {
    console.log('返回',res.data)
    if(!res.data.isError)
     return dispatchAction(initRoomList(info._id));
    dispatchAction(showAlert(res.data.msg));
  })
  .catch(err => dispatchAction(showAlert(err)))
}

export const modifyInfo = (info) => {
  let formdata = formData(info);
  return axios.post('/api/modifyUserInfo', formdata, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
  .then(res => {
    if(!res.data.isError) {
      console.log('返回',res.data.msg)
      return dispatchAction(setUser(res.data.msg.user));
    }
    else{
      dispatchAction(showAlert(res.data.msg));
    }
  })
  .catch(err => dispatchAction(showAlert(err)))
}

export const modifyGroupInfo = (info) => {
  let formdata = formData(info);
  return axios.post('/api/modifyGroupInfo', formdata, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
  .then( (res) => {
    dispatchAction(showAlert('修改成功'));
    return res;
  } )
  .catch(err => dispatchAction(showAlert(err)))
}

