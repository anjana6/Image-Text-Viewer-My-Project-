import {SET_ALERT,REMOVE_ALERT} from './Type';

export const setAlert = (msg,type) => dispatch =>{
    // console.log(msg,type);
    // console.log({msg,type});
  dispatch({
      type:SET_ALERT,
      payload: {msg,type}
  });

  setTimeout(() => {
    dispatch({
      type:REMOVE_ALERT
    })
  }, 5000);
}