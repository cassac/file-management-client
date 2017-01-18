import { axios } from '../../config';
import fileTypes from './actionTypes';
import { 
  handleRequestSuccess, 
  handleRequestError, 
  handleRequestFail 
} from '../common/actions';

export const toggleUploadFileModal = () => {
  return {
    type: fileTypes.UPLOAD_FILE_MODAL_OPEN,
  }
}

export const toggleEditFileModal = file => {
  return {
    type: fileTypes.EDIT_FILE_MODAL_OPEN,
    file
  }
}

export const toggleDeleteFileModal = file => {
  return {
    type: fileTypes.DELETE_FILE_MODAL_OPEN,
    file
  }
}

export const getUserFiles = userId => {
  return dispatch => {
    axios.get(`api/users/${userId}/files`)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.REQUEST_USER_FILES,
          payload: response.data.results          
        });
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}

export const uploadFileSubmit = (userId, file) => {
  return dispatch => {
    axios.post(`api/users/${userId}/file`, file)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.UPLOAD_FILE_SUCCESS,
          payload: response.data.results
        });
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}

export const editFileSubmit = (userId, file) => {
  return dispatch => {
    axios.put(`api/users/${userId}/file/${file._id}`, file)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.EDIT_FILE_SUCCESS,
          payload: response.data.results,
        });
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}

export const deleteFileSubmit = (userId, file) => {
  return dispatch => {
    axios.delete(`api/users/${userId}/file/${file._id}`)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.DELETE_FILE_SUCCESS,
          payload: {_id: file._id},
        });
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}