import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';
/*======================
以下是我们利用 AppDispatcher 打造的 Action Creator 
由 handleAction 负责发出传入的 action 　　
=======================*/
export const TodoActions = {
  //action接到值後，呼叫調動器，並給予type是add_todo，加上payload值
  addTodo(text) {
    //handleAction負責發出傳入的action
    AppDispatcher.handleAction({
      //區別所觸發的行為
      type: ADD_TODO,
      //payload是夾帶的資料
      payload: {
        text,
      },
    });
  },
};