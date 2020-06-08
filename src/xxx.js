
import React from 'react'
import { connect } from 'react-redux'

import App from '../component/app'
import { add } from '../action/app'

function mapStateToProps(state) {
  return {
      data: state.data
    };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(add()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



import React from 'react'

export default class App extends React.Component {
  render() {
    return (
    <div>
      <span>{this.props.data}</span>
      <button onClick={ () => this.props.handleClick() }>Add</button>
    </div>
    )
  }
}




import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from './container/AppContainer'
import reducer from './reducer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)






// action types
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

// action creators
export const add = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const edit = (todo) => {
    return {
      type: EDIT_TODO,
      todo,
    };
  };


  // Action Type:
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

// Action Creators:
function addTodo (todo) {
	return {type: 'ADD_TODO', payload: todo };
}

function removeTodo (todo) {
	return {type: 'REMOVE_TODO', payload: todo };
}


  

const reducer = (state = initialState, action) => {
    let newState = {...state}
    const { id, text } = action.payload || {}
    switch (action.type) {
        case ADD_TODO:
        newState.index++
        newState.data[newState.index] = { id: newState.index, text };
        return newState
      case REMOVE_TODO:
        let newData = {...newState.data}
        delete newData[id]
        return {
          ...newState,
          data: newData
        }
      default:
          return state;
    }
  }


  const initialData = {
    1: { id: 1, text: "brush a tooth"},
    2: { id: 2, text: "wash a face"},
    3: { id: 3, text: "drink a coffee"},
  }
  
  const initialState = {
    index: Object.values(initialData).length,
    data: initialData
  }


  var store = Redux.createStore(reducer);



  const store = Redux.createStore(
    combineReducers({
      user: userReducer,
      content: contentReducer
    })
  );