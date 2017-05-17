import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';
//EventEmitter是用來監聽事件
/*======================
在 Store 中，需要提供 API 讓 View 註冊資料改變的監聽器(listener)，
我們使用現有的事件管理模組 - EventEmitter，讓它替我們負責監聽事件和觸發事件。　　
=======================*/
//events包含在flux裡面
import { EventEmitter } from 'events';

const store = {
  todos: [],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  // 1. 提供 View 註冊監聽器，使用 addListener(eventName, listener)
  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }
  // 2. 提供 View 註銷監聽器，使用 removeListener(eventName, listener)
  removeChangeListener(callback) {
    this.removeListener(ADD_TODO, callback);
  }
  getTodos() {
    return store.todos;
  }
}

const TodoStore = new TodoStoreClass();
//regiser寄存器//獲得Dispatcher來的action
AppDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      store.todos.push(action.payload.text);
      TodoStore.emit(ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default TodoStore;